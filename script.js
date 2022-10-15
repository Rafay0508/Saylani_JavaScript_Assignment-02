// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Question#01
// Create a class called PersonAccount.It has firstName, lastName, incomes, expenses properties, and totalincome, totalExpense, addIncome, addExpense and accountBalance methods. 
// Incomes is an array of objects. incomes object have income and discription properties.
// Expenses is also an array of objects which has expense and description properties.
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Code: 
// class personAccount {
        //     constructor(fName, lName, income, incomeDesc, expense, expenseDesc) {
        //         this.firstName = fName;
        //         this.lastName = lName;
        //         this.incomes =
        //             [
        //                 {
        //                     income,
        //                     incomeDesc
        //                 }
        //             ];
        //         this.expenses =
        //             [
        //                 {
        //                     expense,
        //                     expenseDesc
        //                 }
        //             ];
        //     }
        //     totalIncome = () => console.log("total income");
        //     totalExpenses = () => console.log("total expenses");
        //     addIncome = () => console.log("add income");
        //     accountBalance = ()=>console.log("account Balance");

        // }
        // let emp1 = new personAccount('Abdul', 'Rafay', 50000, 'monthly', 10000, 'travel');
        // console.log(emp1);


// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Question#02
// Create an automobile class. The class will have name, model, color, type: automatic or manual properties and create different methods e-g: start() logs car is ready for drive, opendoor() logs door is open
// Create child classes of Automobile Car, Truck, Bus these classes also have extra information like doors property, maxspeed.
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Code: 
// class automobile {
        //     constructor(name, model, color, type) {
        //         this.name = name;
        //         this.model = model;
        //         this.color = color;
        //         this.type = type;
        //     }
        //     start = () => console.log("car is ready for drive");
        //     opendoor = () => console.log("door is open");
        // }
        // class Car extends automobile {
        //     constructor(name, model, color, type, doors, property, maxspeed) {
        //         super(name, model, color, type)
        //         this.doors = doors;
        //         this.property = property;
        //         this.maxspeed = maxspeed;
        //     }
        // }
        // class Truck extends automobile {
        //     constructor(name, model, color, type, doors, property, maxspeed) {
        //         super(name, model, color, type)
        //         this.doors = doors;
        //         this.property = property;
        //         this.maxspeed = maxspeed;
        //     }
        // }
        // class Bus extends automobile {
        //     constructor(name, model, color, type, doors, property, maxspeed) {
        //         super(name, model, color, type)
        //         this.doors = doors;
        //         this.property = property;
        //         this.maxspeed = maxspeed;
        //     }
        // }

        // truck1 = new Truck('Cyber truck', 2020, 'silver', 'Al Controlled', 4, 'Tesla', 120);
        // console.log(truck1);