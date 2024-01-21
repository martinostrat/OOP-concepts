class Person {
    constructor() {
        this.firstname = '';
        this.lastname = '';
        this.age = 0;
    }
}

class Student {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
}

const person1 = new Person();
person1.firstname = 'Tyyp';
person1.lastname = 'Kivi';
person1.age = 22;

console.log(person1)

const person2 = new Person();
person2.firstname = 'Mati';
person2.lastname = 'Kiil';
person2.age = 44;

console.log(person2);

const person3 = new Person();
person3.firstname = 'Tiiu';
person3.lastname = 'Uus';
person3.age = 17;

console.log(person3);

const student1 = new Student('Anni', 'Mägi', 30);
console.log(student1);

const student2 = new Student('Luisa', 'Olm', 20);
console.log(student2);

const student3 = new Student('Marek', 'Saal', 32);
console.log(student3);