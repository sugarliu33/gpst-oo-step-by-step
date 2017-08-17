const Person = require('./person');
class Student extends Person{
    constructor(name,age,number){
        super(name,age);
        this.class = number;
    }

    introduce(){
        return "My name is " +super.name+ ". I am " +super.age+ " years old. I am a Student. I am at Class "+ this.class+".";
    }
}

// var s = new Student("Tom", 21, 2);
// console.log(s.introduce());

// module.exports = class Student {}
module.exports = Student;