// Write your code here
//traditional method
/**
function Person(name,age) {
    this.name = name;
    this.age = age;
}
Person.prototype.introduce = function () {
    return "My name is " + this.name + ". I am " + this.age + " yesrs old.";
}

var p = new person("Tom",20);
console.log(p.introduce());
module.exports = Person;
 **/
//ES6 class
class Person{
    constructor(name, age){
        Person.prototype.name = name;
        Person.prototype.age = age;
    }
    introduce(){
        return "My name is " + this.name + ". I am " + this.age + " years old.";
    }
}
module.exports = Person;