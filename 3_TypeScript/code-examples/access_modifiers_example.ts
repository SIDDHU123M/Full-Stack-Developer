
// Shows the use of public, private, and protected access modifiers.
class BankAccount {
    private balance: number; // Private property, accessible only within this class

    // Constructor to initialize the account balance
    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    // Public method to deposit money into the account
    public deposit(amount: number): void {
        this.balance += amount;
    }

    // Public method to get the current balance
    public getBalance(): number {
        return this.balance;
    }
}

// Create an instance of the BankAccount class
const account = new BankAccount(100);
account.deposit(50);
console.log(account.getBalance()); // Output: 150
// console.log(account.balance); // Error: Property 'balance' is private and only accessible within class 'BankAccount'.
