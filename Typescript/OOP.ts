/*class Human {
    name: string = ''
    lastname: string = ''
    age: number = 0

    sayHello() {
        return "Hello ! I'm " + this.name + " and " + this.age + " years old."
    }
}

const user1: any = new Human()

user1.name = 'Tinnaphop'
user1.age = 23

console.log(user1.sayHello());*/


/*class Point {
    x: number = 0;
    y: number = 0;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        console.log('Hello');
        
    }
}

const point = new Point(10, 20);
console.log(`${point.x}, ${point.y}`);*/


/*class Person {
    name: string = "";

    constructor(name: string) {
        this.name = name;
    }

    sayHi() {
        console.log(`Hi, ${this.name}`);
    }
}

class Employee extends Person {
    salary: number = 0;

    constructor(name: string, salary: number) {
        super(name);
        this.salary = salary;
    }

    sayHi() {
        super.sayHi();
        console.log(`Salary: ${this.salary}`);
        
    }
}

const person = new Employee("Jung", 15000);
person.sayHi();*/