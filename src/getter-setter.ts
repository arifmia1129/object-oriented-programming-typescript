class BankAccount {
    id:number;
    name:string;
   private _balance:number

    constructor(id:number, name:string, balance:number){
        this.id=id;
        this.name = name;
        this._balance = balance;
    }

    get balance():number{
        return this._balance;
    }

    set deposit(value:number){
         this._balance = this._balance + value;
    }
}

const myAccount = new BankAccount(123,"Arif", 120);

console.log(myAccount.balance);
myAccount.deposit=20;
console.log(myAccount.balance);

