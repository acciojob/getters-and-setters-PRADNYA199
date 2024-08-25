//complete this code
class Person {
	constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Student extends Person {
constructor(name, age, grade) {
        super(name, age); // Call the parent class constructor
        this.grade = grade;
    }

    study() {
        return `${this.name} is studying.`;
    }

    introduce() {
        return `${super.introduce()} I am a student in grade ${this.grade}.`;
    }
}
class Teacher extends Person {
 constructor(name, age, subject) {
        super(name, age); // Call the parent class constructor
        this.subject = subject;
    }

    teach() {
        return `${this.name} is teaching ${this.subject}.`;
    }

    introduce() {
        return `${super.introduce()} I am a teacher of ${this.subject}.`;
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
