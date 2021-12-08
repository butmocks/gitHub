// wallet

class Wallet {
    constructor() {
        this._balance = 0;
    }

    getBalance() {
        return this._balance;
    }

    deposit(amount) {
        this._balance += amount;
    }

    withdraw(amount) {
        if (amount > this._balance) {
            console.log('No enough funds');
            return
        }

        this._balance -= amount;
    }
}

const wallet1 = new Wallet()

wallet1._balance

console.log(wallet1.getBalance());
wallet1.deposit(45);
console.log(wallet1.getBalance())
wallet1.withdraw(34);
console.log(wallet1.getBalance());