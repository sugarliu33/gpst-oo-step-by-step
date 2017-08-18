// Write your code here
// function Person(name, age, id){
//     Person.prototype.name = name;
//     Person.prototype.age = age;
//     Person.prototype.id = id;
//     Person.prototype.introduce = function(){
//         return "My name is " + this.name + ". I am " + this.age + " years old.";
//     }
// }

class Person{
    constructor(name, age, id){
        Person.prototype.name = name;
        Person.prototype.age = age;
        Person.prototype.id = id;
    }
    introduce(){
        return "My name is " + this.name + ". I am " + this.age + " years old.";
    }
}
module.exports = Person;
//module.exports = class Person {}