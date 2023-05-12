class BankAccount {
    id:number;
    name:string;
   private _balance:number

    constructor(id:number, name:string, balance:number){
        this.id=id;
        this.name = name;
        this._balance = balance;
    }

    getBalance() {
        console.log(`Account name: ${this.name}, Balance: ${this._balance}`)
    }
    addDeposit(amount:number){
        this._balance = this._balance +amount;
    }
}

const myAccount = new BankAccount(123,"Arif", 120);

myAccount.getBalance();

