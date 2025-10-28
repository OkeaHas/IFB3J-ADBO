/*class Karyawan {
    constructor(nama, jabatan, gaji) {
        this.nama = nama;
        this.jabatan = jabatan;
        this.gaji = gaji;
    }

    info() {
        return `Nama: ${this.nama}, Jabatan: ${this.jabatan}, Gaji: ${this.gaji}`;
    }

    getInfo() {
        return this.info("Karyawan ini mempunyai gaji sebesar " + this.gaji);
    }
}

const karyawan1 = new Karyawan("Dina", "HRD", 8000000); //objek karyawan1
const karyawan2 = new Karyawan("Budi", "Programer", 12000000); //objek karyawan2
const Dina = new Karyawan(3000);
console.log(karyawan1.info()); //menampilkan info karyawan1
console.log(karyawan2.info()); //menampilkan info karyawan2
console.log(Dina.getInfo()); //menampilkan gaji karyawan1*/

/*class StoreItem {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    info() {
        return `Item: ${this.name}, Price: $${this.price}`;
    }
}

const item1 = new StoreItem("Laptop", 1500);
const item2 = new StoreItem("Smartphone", 800);
console.log(item1.info()); // menampilkan info item1
console.log(item2.info()); // menampilkan info item2*/

/*class FruitBasket {
    constructor() {
        this.fruitBasket = [];
    }
    addItem(fruit) {
        this.fruitBasket.push(fruit);
    }
    removeItem(fruit) {
        this.fruitBasket.pop(fruit);
    }
    getInformation() {
        return `Fruits in basket: ${this.fruitBasket.join(", ")}`;
    }
}
const basket = new FruitBasket();
basket.addItem("Apple");
basket.addItem("Banana");
basket.removeItem();
console.log(basket.getInformation()); // menampilkan isi keranjang buah*/

class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    makeSound() {
        if (this.type === "Anjing") {
            return "Woof!";
        } else if (this.type === "Cat") {
            return "Meow!";
        } else {
            return "Unknown sound";
        }
    }
}
const anjing = new Animal("Buddy", "Anjing");
const kucing = new Animal("Whiskers", "Cat");
console.log(anjing.type + " mengeluarkan suara " + anjing.makeSound()); // menampilkan suara anjing
console.log(kucing.type + " mengeluarkan suara " + kucing.makeSound()); // menampilkan suara kucing

class Car {
    constructor(brand, color, speed = 0) {
        this.brand = brand;
        this.color = color;
        this.speed = speed;
    }

    accelerate(amount = 0) {
        this.speed += amount;
        `Next the car is now going at ${this.speed} km/h`;
    }
}
const myCar = new Car("Toyota", "Red");
console.log("Kecepatan pertama mobil ini adalah " + myCar.speed + " km/h"); // menampilkan kecepatan awal mobil
myCar.accelerate(10); // menampilkan kecepatan mobil setelah akselerasi
console.log("Kecepatan mobil setelah akselerasi adalah " + myCar.speed + " km/h");
myCar.accelerate(200); // menampilkan kecepatan mobil setelah akselerasi tambahan
console.log("3 Jam mobil setelah Akselerasi adalah " + myCar.speed + " km/h");

class BankAccount {
    constructor(ownerName, balance) {
        this.ownerName = ownerName;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        return `Deposit: $${amount}. Total Sekarang: $${this.balance}`;
    }
}
const account = new BankAccount("Alice", 0);
console.log("Total uang Di Bank " + account.balance +". "+ account.deposit(200)); // menampilkan saldo setelah deposit
console.log("Total uang Di Bank " + account.balance +". " +account.deposit(300)); // menampilkan saldo setelah deposit tambahan

