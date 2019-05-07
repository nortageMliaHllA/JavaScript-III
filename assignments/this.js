/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global object binding-when in the global scope, the value of "this" will be the window/console Object.
* 2. Implicit binding-whenever a funciton is called by preceding dot, the object left of the dot gets "this". 
* 3. New binding-when a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Explicit binding-whenever JavaScript's call or apply method is used. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(name) {
    console.log(this);
    return name;
}
sayName("Ahmad");

// Principle 2

// code example for Implicit Binding
const myObj = {
    greeting: 'Hello,',
    sayHello: function(name) {
        console.log(`${this.greeting} ${name} has arrived!`);
        console.log(this);
    }
};
myObj.sayHello('Megatron');

// Principle 3

// code example for New Binding
function Parent(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.phrase = attr.phrase; 
}

Parent.prototype.speak = function() {
    return `${this.name} says ${this.phrase}`;
}

const ahmad = new Parent({
    name: 'Ahmad',
    age: 34,
    phrase: 'We must learn JavaScript!'
})

const ashley = new Parent({
    name: 'Ashley',
    age: 31,
    phrase: 'Ahmad!'
})

console.log(ahmad.speak());
console.log(ashley.speak());

// Principle 4

// code example for Explicit Binding
function Person(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.speak = function() {
        console.log(this);
        return `Hello, my name is ${this.name} and I am ${this.age} years old!`;
    }
}
const chris = new Person({name:'Chris', age: 30});
const adam = new Person({name:'Adam', age: 24});

chris.speak.call(adam);
adam.speak.apply(chris);
