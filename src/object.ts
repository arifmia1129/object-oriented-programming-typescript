// Normal system for class 

// class Animal{
//     name:string;
//     species:string;
//     sound:string;

//     constructor (name:string, species:string, sound:string) {
//         this.name = name;
//         this.species = species;
//         this.sound = sound;
//     }

//     makeSound() {
//         console.log(`The ${this.name} says ${this.sound}`);
//     }
// }


// const dog = new Animal("Triger", "Dog", "Ghew Ghew");
// const cat = new Animal("Lovely", "Cat", "Mew mew" );

// dog.makeSound();
// cat.makeSound();


// Parameter properties

class Animal{
    constructor(public name:string, public species:string, public sound:string){};

    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`);
    }
}

const dog = new Animal("Tiger dog", "Dog", "Ghew ghew");

dog.makeSound();

