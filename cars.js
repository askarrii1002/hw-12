class car {
    constructor(make,model) {
    this._make = make;
    this._model = model;
    }

    get make() {
        return this._make
    }
    chooseMake(pick) {
        this._make = pick;
        console.log(`You have choosen ${this._make}!`);
    }

    get model() {
        return this._model;
    }

    sunroof() {
        this._sunroof = "sunroof";
        console.log(`Your car come equiped with a sunroof!!!!`);
    }
}

var myCar = new car("Chevy", "Malibu");
console.log(myCar.make);
console.log(myCar.model);
myCar.chooseMake("Honda");

class Akmal extends car {
    constructor(make, model, trim) {
        super(make, model)
        this._trim = trim;
    }

    get trim() {
        return this._trim;
    }
}

var myFirstCar = new Akmal("Chevy", "Malibu", "LTZ");
console.log(myFirstCar.make);
console.log(myFirstCar.model);
console.log(myFirstCar.trim);
myFirstCar.sunroof();