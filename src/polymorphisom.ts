class Person {
    takeSleep(){
        console.log(`I am sleeping 8 hours per day`);
    }
}

class Student extends Person{
    takeSleep(): void {
        console.log("I am sleeping 10 hours per day");
    }
}

class Developer extends Student{
    takeSleep(): void {
        console.log("I am sleeping 6 hourse per day");
    }
}

function getSleep(param:Person) {
    param.takeSleep();
}

const person = new Person();
const student = new Student();
const developer = new Developer();

getSleep(person);
getSleep(student);
getSleep(developer);


class Shape{
    getArea() {
        return 0;
    }
}

class Circle extends Shape{
    radius:number;

    constructor(radius:number) {
        super();
        this.radius = radius;
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle extends Shape{
    height:number;
    width:number;

    constructor(heigth:number, width:number) {
        super();
        this.height=heigth;
        this.width=width;
    }

    getArea(): number {
        return this.height * this.width;
    }
}

const shape = new Shape();
const circle = new Circle(10);
const rectangle = new Rectangle(10,20);

function getArea(param:Shape) {
    console.log(param.getArea());
}

getArea(shape);
getArea(circle);
getArea(rectangle);