// Write your code here
// module.exports = class Class {}
class Class{
    constructor(number){
        this.number = number;
    }
    assignLeader(student){
        if (this.hasStudent(student)){
            this.leader = student.name;
            return "Assign team leader successfully.";
        }else {
            return "It is not one of us."
        }
    }
    appendMember(student){
        this.member = student;
        if (this.teacher) {
            this.teacher.notifyStudentAppended(student.name + " has joined Class " + student.clazz.number);
        }
    }
    hasStudent(student){
        if (student === this.member){
            return true;
        }else {
            return false;
        }
    }
}
module.exports = Class;