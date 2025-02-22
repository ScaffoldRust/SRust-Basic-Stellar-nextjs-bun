use soroban_sdk::{contract, contractimpl, contracttype, Address, Bytes, Env, Symbol, Map, U256};

// Define the contract structure
#[contract]
pub struct YourContract;

// Helper functions to generate storage keys
fn get_greeting_key(env: &Env) -> Symbol {
    Symbol::new(env, "greeting")
}

fn get_premium_key(env: &Env, user: &Address) -> Symbol {
    Symbol::new(env, &format!("premium_{}", user))
}

fn get_total_counter_key(env: &Env) -> Symbol {
    Symbol::new(env, "total_counter")
}

fn get_user_greeting_counter_key(env: &Env, user: &Address) -> Symbol {
    Symbol::new(env, &format!("user_greeting_counter_{}", user))
}

fn get_owner_key(env: &Env) -> Symbol {
    Symbol::new(env, "owner")
}

// Implementation of the contract logic
#[contractimpl]
impl YourContract {
    // Initialize the contract
    pub fn initialize(env: Env, owner: Address) {
        let greeting_key = get_greeting_key(&env);
        let total_counter_key = get_total_counter_key(&env);
        let owner_key = get_owner_key(&env);

        env.storage().instance().set(&owner_key, &owner);
        env.storage()
            .instance()
            .set(&greeting_key, &Bytes::from_slice(&env, b"Building Unstoppable Apps!!!"));
        env.storage()
            .instance()
            .set(&total_counter_key, &U256::from_u32(&env, 0));
    }

    // Get the current greeting message
    pub fn greeting(env: Env) -> Bytes {
        let greeting_key = get_greeting_key(&env);
        env.storage()
            .instance()
            .get(&greeting_key)
            .unwrap_or_else(|| Bytes::from_slice(&env, b"Greeting not initialized"))
    }

    // Set a new greeting message and optionally mark the caller as premium
    pub fn set_greeting(env: Env, new_greeting: Bytes, amount_xlm: U256) {
        let caller = env.current_contract_address();
        let greeting_key = get_greeting_key(&env);
        let total_counter_key = get_total_counter_key(&env);
        let user_greeting_counter_key = get_user_greeting_counter_key(&env, &caller);
        let premium_key = get_premium_key(&env, &caller);

        let mut total_counter: U256 = env
            .storage()
            .instance()
            .get(&total_counter_key)
            .unwrap_or(U256::from_u32(&env, 0));

        let mut user_count = env
            .storage()
            .instance()
            .get(&user_greeting_counter_key)
            .unwrap_or(U256::from_u32(&env, 0));

        // Check for overflow
        if total_counter.checked_add(&U256::from_u32(&env, 1)).is_none() {
            panic!("Total counter overflow");
        }
        if user_count.checked_add(&U256::from_u32(&env, 1)).is_none() {
            panic!("User counter overflow");
        }

        total_counter = total_counter.add(&U256::from_u32(&env, 1));
        user_count = user_count.add(&U256::from_u32(&env, 1));

        env.storage().instance().set(&greeting_key, &new_greeting);
        env.storage().instance().set(&total_counter_key, &total_counter);
        env.storage().instance().set(&user_greeting_counter_key, &user_count);

        // Update premium status per user
        if amount_xlm > U256::from_u32(&env, 0) {
            env.storage().instance().set(&premium_key, &true);
        } else {
            env.storage().instance().set(&premium_key, &false);
        }

        // Publish an event indicating that the greeting was changed
        env.events().publish(
            ("GreetingChanged",),
            (caller.clone(), new_greeting, amount_xlm),
        );
    }

    // Simulate a withdrawal (only callable by the owner)
    pub fn withdraw(env: Env) {
        let owner_key = get_owner_key(&env);
        let owner: Address = env
            .storage()
            .instance()
            .get(&owner_key)
            .unwrap_or_else(|| panic!("Owner not initialized"));

        owner.require_auth();
        env.logs().add("Withdrawal simulated", &[]);
    }

    // Check if the caller is marked as premium
    pub fn premium(env: Env) -> bool {
        let caller = env.current_contract_address();
        let premium_key = get_premium_key(&env, &caller);
        env.storage()
            .instance()
            .get(&premium_key)
            .unwrap_or(false)
    }
}
