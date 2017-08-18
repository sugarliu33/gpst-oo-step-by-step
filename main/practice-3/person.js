// Write your code here
//module.exports = class Person {}
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