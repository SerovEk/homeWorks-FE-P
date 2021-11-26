function Student(name, faculty, marks = []) {
  this.name = name;
  this.faculty = faculty;
  this.marks = marks;

  this.getMaxMark = () => {
    return Math.max(...this.marks);
  };
  this.getMinMark = () => {
    return Math.min(...this.marks);
  };
  this.getAvgMark = () => {
    return this.marks.reduce((acc, e) => acc + e, 0) / this.marks.length;
  };
  this.getTotalMarks = () => {
    return this.marks.reduce((acc, e) => acc + e, 0);
  };
  this.getInfo = () => {
    return `
        Student name : ${this.name}
        Fuculty : ${this.faculty}
        Max/min/avg marks : ${this.getMaxMark()} / ${this.getMinMark()} / ${this.getAvgMark()}
        TotalMarks : ${this.getTotalMarks()}
        `;
  };
}
const student1 = new Student(
  "Jhon Dou",
  "Faculty of Journalism",
  [93, 88, 90, 75, 100, 85]
);
const student2 = new Student(
  "Bob Smith",
  "Faculty of Low",
  [90, 88, 70, 75, 100, 88]
);
const student3 = new Student(
  "Sara Morgan",
  "Faculty of Linguistics",
  [98, 82, 60, 75, 100, 95]
);

console.log(student1.getInfo());
console.log(student2.getInfo());
console.log(student3.getInfo());
