// Created by wxc on 2019/10/08

// 1.valueOf
let current = Object.valueOf;
Object.prototype.valueOf = function () {
    if (this.hasOwnProperty('-prop-value')) {
        return this['-prop-value'];
    } else {
        return current.apply(this, arguments);
    }
}

// 2.greet
let Person = function (name) {
    this.name = name;
    this.canTalk = true;
}

Person.prototype.greet = function () {
    if (this.canTalk) {
        console.log("Hi, I'm " + this.name);
    }
}

let Employee = function (name, title) {
    Person.call(this, name);
    this.title = title;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.greet = function () {
    if (this.canTalk) {
        console.log(`Hi I'm ${this.name}, the ${this.title}`);
    }
}

let Customer = function (name) {
    Person.call(this,name);
}

Customer.prototype = Object.create(Person.prototype)

let Mime = function (name) {
    Person.call(this.name);
    this.canTalk = false;
}

Mime.prototype = Object.create(Person.prototype);