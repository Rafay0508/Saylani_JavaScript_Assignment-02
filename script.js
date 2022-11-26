// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Question#01
// Create a class called PersonAccount.It has firstName, lastName, incomes, expenses properties, and totalincome, totalExpense, addIncome, addExpense and accountBalance methods. 
// Incomes is an array of objects. incomes object have income and discription properties.
// Expenses is also an array of objects which has expense and description properties.
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Code: 
//class personAccount {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.Incomes = {
//             income: "Salary",
//             discription: "Monthly"
//         };
//         this.expenses = {
//             expense: "Cleaning",
//             discription: "Monthly"
//         };
//     }
//     totalIncome() {
//         console.log("total income");
//     }
//     totalExpense() {
//         console.log("total expenses");
//     }
//     addIncome() {
//         console.log("add income");
//     }
//     addExpense() {
//         console.log("add expenses");
//     }
//     accountBalance() {
//         console.log("account balance");
//     }

// }

// let emp1 = new personAccount("abdul", "rafay");

// console.log(emp1);
// emp1.addExpense();


// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Question#02
// Create an automobile class. The class will have name, model, color, type: automatic or manual properties and create different methods e-g: start() logs car is ready for drive, opendoor() logs door is open
// Create child classes of Automobile Car, Truck, Bus these classes also have extra information like doors property, maxspeed.
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Code: 
// class AutoMobile {
//     constructor(name, model, color, type) {
//         this.name = name;
//         this.model = model;
//         this.color = color;
//         this.type = type;
//     }
//     Start() {
//         console.log("Car is ready for drive")
//     }
//     openDoor() {
//         console.log("Door is open");
//     }

// }

// class Car extends AutoMobile {
//     constructor(name, model, color, type, door, maxSpeed) {
//         super(name, model, color, type);
//         this.door = door;
//         this.maxSpeed = maxSpeed;
//     }


// }
// class Truck extends AutoMobile {
//     constructor(name, model, color, type, door, maxSpeed) {
//         super(name, model, color, type);
//         this.door = door;
//         this.maxSpeed = maxSpeed;
//     }


// }
// class Bus extends AutoMobile {
//     constructor(name, model, color, type, door, maxSpeed) {
//         super(name, model, color, type);
//         this.door = door;
//         this.maxSpeed = maxSpeed;
//     }


// }


// let car1 = new Car("cultus", 2020, "white", "automatic", "four", "120KM/H");
// let truck1 = new Truck("Cyber Truck", 2022, "Grey", "automatic", "two", "250KM/H");

// console.log(truck1.door)
// car1.Start();
