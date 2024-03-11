/* Function Constructor */
/* const rakeshAccount = new BankAccount('Rakesh K', 1000);
   console.log(rakeshAccount)
   Hoisting Work
*/
function BankAccount(customerName, balance = 0) {
      this.customerName = customerName;
      this.accountNumber = Date.now();
      this.balance = balance;
      
      this.deposit = function (amount) {
          this.balance += amount;
      };
  
      this.withdraw = (amount) => {
          this.balance -= amount;
      };
}

//   const rakeshAccount = new BankAccount('Rakesh K', 1000);
//   const johnAccount = new BankAccount('John Doe');

  /* rakeshAccount.deposit(5000);
  johnAccount.deposit(1000);
  rakeshAccount.withdraw(2000);
  
  console.log(rakeshAccount, johnAccount); */
  
  // ============================
/*
  const accounts = [];
  const accountForm = document.querySelector('#accountForm');
  const customerName = document.querySelector('#customerName');
  const balance = document.querySelector('#balance');
  
  const depositForm = document.querySelector('#depositForm');
  const accountNumber = document.querySelector('#accountNumber');
  const amount = document.querySelector('#amount');
  
  accountForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const account = new BankAccount(customerName.value, +balance.value);
      accounts.push(account);
      console.log(accounts);
  });
  
  depositForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const account = accounts.find(
          (account) => account.accountNumber === +accountNumber.value
      );
      account.deposit(+amount.value);
      console.log(accounts);
  }); */

  /* 
  property is basically an object (also known as Prototype object), where we can attach methods and properties in a prototype object, which enables all the other objects to inherit these methods and properties 
  */

 /*  BankAccount.prototype.deposit = function (amount) {
      this.balance += amount;
  };
  
  BankAccount.prototype.withdraw = (amount) => {
      this.balance -= amount;
  }; */

/*   BankAccount.prototype.myBalance = function(){
      return this.balance
  }
  console.log(rakeshAccount.myBalance()) */



/* Class Object in javascript */
/* const roham = new Student("rohan","bca",2000)
console.log(roham)
Not Work Hoisting
*/
class Student{
      name;
      batch;
      fee;
      feeStatus = 'Not Paid';
      constructor(name,batch,fee){
           this.name = name;
           this.batch = batch;
           this.fee = fee  
           this.studentId = Date.now()
      }

      deposit(fee){
          this.fee = fee
          this.feeStatus = 'Paid'
      }
      profile(){
          console.log(
            'Student Name is '+this.name+' StudentId : '+this.studentId+' Fee Status : '+this.feeStatus)
      }

}

/* const roham = new Student("rohan","bca",2000)
roham.deposit(2000)
roham.profile() */

/* Inheritance Class */
class BankAcc {
      customerName;
      accountNumber;
      //Private Properties
      #balance = 0;
  
      constructor(customerName, balance = 0) {
          this.customerName = customerName;
          this.accountNumber = Date.now();
          this.#balance = balance;
      }
  
      deposit(amount) {
          this.#balance += amount;
      }
  
      withdraw(amount) {
          this.#balance -= amount;
      }


      set balance(amount) {
            if (isNaN(amount)) {
                throw new Error('Amount is not a valid input');
            }
            this.#balance = amount;
      }
    
      get balance() {
            return this.#balance;
      }
  }
  
  class CurrentAcc extends BankAcc {
      transactionLimit = 50000;
  
      constructor(customerName, balance = 0) {
          super(customerName, balance);
      }
      // Private Method
      #calculateInterest(amount) {
            console.log('Calculating interest');
      }
  
      takeBusinessLoan(amount) {
          this.#calculateInterest(amount);
          console.log('Taking business loan: ' + amount);
      }
  }
  
  class SavingAcc extends BankAcc {
      transactionLimit = 10000;
  
      constructor(customerName, balance = 0) {
          super(customerName, balance);
      }
  
      takePersonalLoan(amount) {
          console.log('Taking personal loan: ' + amount);
      }
  }
  
 /*  const rakeshAccount = new SavingAcc('Rakesh K', 500);
  rakeshAccount.deposit(500);
  rakeshAccount.withdraw(100);
  rakeshAccount.takePersonalLoan(40000); */


function CurrentAccount(customerName, balance = 0) {
    BankAccount.call(this, customerName, balance);
    this.transactionLimit = 50000;
}

CurrentAccount.prototype = Object.create(BankAccount.prototype);

CurrentAccount.prototype.takeBusinessLoan = function (amount) {
    console.log('Taking business loan: ' + amount);
};

function SavingAccount(customerName, balance = 0) {
    BankAccount.call(this, customerName, balance);
    this.transactionLimit = 10000;
}
SavingAccount.prototype = Object.create(BankAccount.prototype);

SavingAccount.prototype.takePersonalLoan = function (amount) {
    console.log('Taking personal loan: ' + amount);
};

const rakeshAccount = new SavingAccount('Rakesh K', 500);
rakeshAccount.deposit(500);
rakeshAccount.withdraw(100);
rakeshAccount.takePersonalLoan(40000);
// console.log(rakeshAccount);


/* Encapsulation */

/* let student = {
      id: 12,
      name: "Isaac",
      marks: 81,
      setMarks: function(newMarks){
          if(isNaN(newMarks)){
              throw new Error(`${newMarks} is not a number`)
          }
          marks = newMarks
      }
  }
  student.setMarks("Eighty Five")
  console.log(student) */


  /* Static Property is js */

  // class Config {
//     static dbUser = 'usename';
//     static dbPassword = 'secret';
//     static apiToken = 'abcd';
// }

// console.log(Config.apiToken);

// // Increment
class User {
      // static id = 1;
      static cache = {
          1: 'some value',
      };
  
      constructor(name, age, income) {
          this.name = name;
          this.age = age;
          this.income = income;
          this.id = User.id++;
      }
  
      // checkCache() {}
  
      static {
          console.log('Initialized');
      }
  
      static hasInCache() {
          console.log(User.cache);
      }
  
      // static compareByAge(user1, user2) {
      //     return user1.age - user2.age;
      // }
  
      // static compareByIncome(user1, user2) {
      //     return user1.income - user2.income;
      // }
  }
  
  // User.hasInCache();
  // const user1 = new User('Rakesh K', 30, 5000);
  User.hasInCache();
  User.hasInCache();
  // const user2 = new User('John Doe', 40, 10000);
  // const user3 = new User('Jane Doe', 20, 7000);
  
  // console.log(user1, user2, user3);


