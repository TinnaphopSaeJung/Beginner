/*class Car {
    constructor(brand) {
        this.carName = brand;
    }

    present() {
        return "I have a " + this.carName;
    }
}

class Model extends Car {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }

    show() {
        return this.present() + " it's a " + this.model;
    }
}

var myCar = new Model("Ford", "Mustang");

console.log(myCar.show());*/

const redBtn = document.getElementById('redBtn');
const greenBtn = document.getElementById('greenBtn');
const blueBtn = document.getElementById('blueBtn');
const deBtn = document.getElementById('deBtn');
const myBox = document.getElementById("myBox");

redBtn.addEventListener("click", () => {
    myBox.style.backgroundColor = "red";
})

greenBtn.addEventListener("click", () => {
    myBox.style.backgroundColor = "green";
})

blueBtn.addEventListener("click", () => {
    myBox.style.backgroundColor = "blue";
})

deBtn.addEventListener("click", () => {
    myBox.style.backgroundColor = "gray";
})