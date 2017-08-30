const Person = require('./person');
const Class = require('./class');
//module.exports = class Teacher {}
class Teacher extends Person{
    constructor(name, age, clazzes, id){
        super(name, age ,id);
        this.clazzes = clazzes;
    }
    introduce(){
        let classInfo = 'No Class';
        if (this.clazzes.length === 0) {
            return super.introduce() + " I am a Teacher. I teach " + classInfo + '.';
        }else {
            classInfo = this.clazzes.map(c => c.number).join(',');
            return super.introduce() + " I am a Teacher. I teach Class " + classInfo + ".";
        }
        // else {
        //     let classNo = '';
        //     for (let obj of this.clazzes) {
        //         classNo += obj.number + ',';
        //     }
        //     classNo = classNo.substring(0, classNo.length - 1);
        //     return super.introduce() + " I am a Teacher. I teach Class " + classNo + ".";
        // }
    }
}
module.exports = Teacher;