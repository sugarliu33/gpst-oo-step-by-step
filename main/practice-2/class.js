// Write your code here
//prototype define class
class Class{
    constructor(number){
        this.number = number;
    }
    assignLeader(student){
        this.leader = student.name;
    }
    hasLeader(student){
        return this.leader && this.leader === student.name;
    }



}
module.exports = Class;
//module.exports = class Class {}

