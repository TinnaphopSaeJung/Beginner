export function sayHello(name: string, lastname:string) : string {
    return name + " " + lastname;
}

console.log(sayHello("Hi", "SaeJung"));


function sum(a: number, b: number, ...rest: number[]): number {
    return a + b + rest.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4, 5));


function add({x, y}: {x: number, y:number}): number {
    return x + y;
}

console.log(add({y:5, x:100}));

