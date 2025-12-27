//==================================================
//FILE      : app.js
//PARADIGM  : Object Oriented Programming (OOP)
//==================================================


//==================================================
//CLASS : Guitar
//TYPE  : Entity / Model
//==================================================
class Guitar {
    constructor(serialNumber, price, builder, model, type, backWood, topWood) {
        this.serialNumber = serialNumber;
        this.price = price;
        this.builder = builder;
        this.model = model;
        this.type = type;
        this.backWood = backWood;
        this.topWood = topWood;
    }

    getSerialNumber() {
        return this.serialNumber;
    }

    getPrice() {
        return this.price;
    }

    setPrice(price) {
        this.price = price;
    }

    getBuilder() {
        return this.builder;
    }

    getModel() {
        return this.model;
    }

    getType() {
        return this.type;
    }

    getBackWood() {
        return this.backWood;
    }

    getTopWood() {
        return this.topWood;
    }
}

//==============================
// CLASS : Inventory
// TYPE  : Controller / Manager
//==============================

class Inventory {
    constructor() {
        this.guitars = [];
    }

    addGuitar(serialNumber, price, builder, model, type, backWood, topWood) {
        const guitar = new Guitar(
            serialNumber,
            price,
            builder,
            model,
            type,
            backWood,
            topWood
        );
        this.guitars.push(guitar);
    }

    getGuitar(serialNumber) {
        return this.guitars.find(
            guitar => guitar.getSerialNumber() === serialNumber
        ) || null;
    }

    search(searchGuitar) {
        return this.guitars.find(guitar => {

            if (searchGuitar.getBuilder() &&
                searchGuitar.getBuilder() !== guitar.getBuilder()) return false;

            if (searchGuitar.getModel() &&
                searchGuitar.getModel() !== guitar.getModel()) return false;

            if (searchGuitar.getType() &&
                searchGuitar.getType() !== guitar.getType()) return false;

            if (searchGuitar.getBackWood() &&
                searchGuitar.getBackWood() !== guitar.getBackWood()) return false;

            if (searchGuitar.getTopWood() &&
                searchGuitar.getTopWood() !== guitar.getTopWood()) return false;

            return true;
        }) || null;
    }
}

//=================
//   MAIN PROGRAM
//=================

const inventory = new Inventory();

inventory.addGuitar(
    "SN001",        // serialNumber
    15000000,       // price
    "Fender",       // builder
    "Stratocaster", // model
    "Electric",     // type
    "Alder",        // backWood
    "Maple"         // topWood
);

inventory.addGuitar(
    "SN002",        // serialNumber
    12000000,       // price
    "Gibson",       // builder
    "Les Paul",     // model
    "Electric",     // type
    "Mahogany",     // backWood
    "Maple"         // topWood
);

// Ambil gitar berdasarkan serial number
const guitar = inventory.getGuitar("SN001");
console.log("Guitar by ID:", guitar);

// Cari gitar berdasarkan kriteria
const criteria = new Guitar(
    null,
    null,
    "Gibson",
    null,
    "Electric",
    null,
    null
);

const result = inventory.search(criteria);
console.log("Search result:", result);
