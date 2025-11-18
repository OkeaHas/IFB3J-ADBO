// Contoh Polimorfisme
class Animal {
    speak() {
        return console.log("Hewan bersuara");
    }
}

class Dog extends Animal {
    speak() {
       return console.log("Anjing menggonggong");
    }
}

class Cat extends Animal {
    speak() {
        return console.log("Kucing mengeong");
    }
}

const dog = new Dog();
const cat = new Cat();
const spasi = " ";


dog.speak(); // Output: Anjing menggonggong
cat.speak(); // Output: Kucing mengeong
console.log(spasi);



// Polimorfisme Latihan 1

class vehicle {
    move() {
        return console.log("Kendaraan bergerak");
    }
}

class car extends vehicle {
    move() {
       return console.log("Mobil berjalan di jalan raya");
    }
}

class boat extends vehicle {
    move() {
       return console.log("Kapal berlayar di laut");
    }
}
const Car = new car();
const Boat = new boat();

Car.move(); // Output: Mobil berjalan di jalan raya
Boat.move(); // Output: Kapal berlayar di laut
console.log(spasi);


// Polimorfisme Latihan 2

class Employee {
    constructor(gajiHours) {
        this.gajiHours = gajiHours;
    }

    calculateSalary() {
        return console.log("Karyawan bekerja");
    }
}

class FullTimeEmployee extends Employee {
    calculateSalary() {
        return console.log("Karyawan Full Time Gaji 5.000.000"); // Gaji karyawan penuh waktu
    }
}

class PartTimeEmployee extends Employee {
    calculateSalary( a = this.gajiHours ) {
       return 50000 * a;
    }
}
const fullTime = new FullTimeEmployee();
const partTime = new PartTimeEmployee(20);

fullTime.calculateSalary();
console.log(`Gaji Karyawan Paruh Waktu: Rp${partTime.calculateSalary().toLocaleString("id-ID")}`);