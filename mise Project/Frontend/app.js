class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi, My name is ${this.name}`);
    }
}

class Student extends Person{
    constructor(name,age,marks){
        super(name,age)
        this.marks=marks;
    }
}

let stu1=new Student("adam",12,95)

class Teacher extends Person{
    constructor(name,age,subject){
        super(name,age);
        this.subject=subject;
    }
}