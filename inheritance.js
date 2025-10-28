class Person {
    constructor(name) {
        this.name = name;
    }
    introduceSelf() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

class Proferssor extends Person {
    teaches;

    constructor(name, teaches) {
        super(name);
        this.teaches = teaches;
    }
    introduceSelf() {
        console.log(`my name is ${this.name}, and I will be your ${this.teaches} professor this semester.`);
    }

grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(grade);
    }
}
const walsh = new Proferssor("Walsh", "History");
walsh.introduceSelf(); // menampilkan perkenalan profesor Walsh

walsh.grade("my paper"); // menampilkan nilai acak antara 1-5 untuk paper siswa