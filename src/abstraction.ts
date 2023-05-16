// interface
// interface IVehicle{
//     startEngine():void;
//     stopEngine():void;
//     moveEngine():void;
// }

// class Vehicle implements IVehicle{
//     constructor(public name:string, public brand:string, public model:number){}

//     startEngine(): void {
//         console.log(`This is starting engine`);
//     }
//     stopEngine(): void {
//         console.log("This is stopping engine");
//     }
//     moveEngine(): void {
//         console.log("This is move engine");
//     }
// }


// abstract class

abstract class Vehicle{
   abstract startEngine():void;
   abstract stopEngine():void;
}

class Car extends Vehicle{
    startEngine(): void {
        console.log("This is start engine");
    }
    stopEngine(): void {
        console.log("This is stop engine");
    }
}