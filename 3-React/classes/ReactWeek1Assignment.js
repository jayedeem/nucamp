class Student {
  constructor(name, email, community) {
    (this.name = name), (this.email = email), (this.community = community);
  }
}

class Bootcamp {
  constructor(name, level, students = []) {
    (this.name = name), (this.level = level), (this.students = students);
  }
  registerStudent(student) {
    if (this.students.filter((s) => s.email === student.email).length) {
      console.log(`The student ${student.email} already registered!`);
    } else {
      this.students.push(student);
      console.log(`Registering ${student.email} to the bootcamp ${this.name} `);
    }
    return this.students;
  }
}

const drew = new Student('Drew', 'drew@email.com', 'Irvine');
const lucy = new Student('Lucy', 'Lucy@email.com', 'Irvine');
const webDev = new Bootcamp('React', 'Intermediate');
const express = new Bootcamp('Express', 'Intermediate');
webDev.registerStudent(drew);
express.registerStudent(lucy);
webDev.registerStudent(drew);
express.registerStudent(lucy);
