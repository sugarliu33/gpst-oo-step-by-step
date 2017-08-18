const Person = require('./person');
// module.exports = class Teacher {}
class Teacher extends Person{
    constructor(name, age, clazzes, id){
        super(name, age ,id);
        this.clazzes = clazzes;
        for (let clazz of clazzes) {
            clazz.assignTeacher(this);
        }
    }
    introduce(){
        if (this.clazzes.length === 0) {
            return super.introduce() + " I am a Teacher. I teach No Class.";
        }else {
            var classNo = '';
            for (let obj of this.clazzes) {
                classNo += obj.number + ',';
            }
            classNo = classNo.substring(0, classNo.length - 1);
            return super.introduce() + " I am a Teacher. I teach Class " + classNo + ".";
        }
    }
    isTeaching(student){
        for (let clazz of this.clazzes) {
            if (clazz.hasStudent(student)){
                return true;
            }
        }
        return false;
    }
    notifyStudentAppended(message){}
    notifyLeaderAssigned(message){}
}
module.exports = Teacher;