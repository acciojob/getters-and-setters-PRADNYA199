//complete this code
class Person {
	constructor(name, age)
	{
		this.name=name;
			this.age=age
	}
}

class Student extends Person {
	constructor(name, age,grade)
	super(name,age);
	this.grade=grade;
	study(){
		return `${this.name} is studying.`;
	}
}

class Teacher extends Person {
	constructor(name, age,subject)
	{
		super(name,age);
		this.subject=subject;
		teach(){
			return `${this.name} is teaching.`;
		}
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
