// // keyof guard
// type Alphanumeric = string | number;

// function add(param1:Alphanumeric, param2:Alphanumeric):Alphanumeric{
//     if(typeof(param1)=== "number" && typeof(param2) === "number"){
//         return param1 + param2;
//     }else{
//         return param1.toString() + param2.toString();
//     }
// }

// // in guard

// type NormalUser = {
//     name:string
// }

// type AdminUser = {
//     name:string,
//     role:"admin"
// }

// const normalUser1:NormalUser= {name:"Arif"};
// const adminUser1:AdminUser = {name:"Binu", role:"admin"};

// function checkUser(user:NormalUser|AdminUser):string{
//     if("role" in user){
//         return `${user?.name} is an admin`;
//     }else{
//         return `${user.name} is an user`;
//     }
// }

// console.log(checkUser(normalUser1));
// console.log(checkUser(adminUser1));

class Animal {
    name:string;
    species:string

    constructor(name:string, species:string){
        this.name=name;
        this.species = species;
    }
    makeSound(){
        console.log("I can making sound")
    }
}

class Dog extends Animal{
    constructor(name:string, species:string){
        super(name, species);
    }
    makeBark() {
        console.log(`${this.name} says barking`)
    }
}

class Cat extends Animal{
    constructor(name:string, species:string) {
        super(name, species);
    }

    makeMew() {
        console.log(`${this.name} make mew`)
    }
}

const animal1 = new Dog("Tiger Dog", "Dog");
const animal2 = new Cat("Sweet Cat", "Cat");
const animal3 = new Animal("Lovely Cow", "Cow");

function isDog(animal:Animal):animal is Dog{
    return animal instanceof Dog;
}

function checkAnimal (animal:Animal){
    if(isDog(animal)){
        animal.makeBark();
    } else if(animal instanceof Cat){
        animal.makeMew();
    }else{
        animal.makeSound();
    }
}

checkAnimal(animal1);
checkAnimal(animal2);
checkAnimal(animal3);