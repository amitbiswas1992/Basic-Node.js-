var pet = {
    name: 'Patches',
    type: 'Dog'
};

function printPet(pet) {
    console.log('Your ' + pet.type + ' is named ' + pet.name);
}

printPet(pet);

var person = {
    name: "Jack",
    age: 23,
    speackname: function(aName) {
        return "hello" + aName;
    }
};

console.log(person.name);
console.log(person.age);
console.log(person.speackname("herrey"));


var car = {

    tire: 4,
    mirror: 3,
    fuel: function(FUEL) {
        var oil = true;
        if (oil == true) {
            console.log("Car going to move");

        } else {
            console.log("Car is stuck ");
        }
        return "here is the result" + FUEL;
    }
}

console.log(car.fuel("Fuel is full "));

console.log(car.tire);
car.tire += 10;
console.log(car.tire);

//second way to handle object // function type object
var vehicle = function(make, color, premium) {

    var self = this;

    this.make = make;
    this.odometer = 0;
    this.engine = "V6";
    this.color = color;

    if (premium == true) {
        this.engine = "V8";
        this.color = "platinum";

    }

    this.addTrip = function(newMiles)

    {
        if (newMiles > 0) {
            self.odometer += newMiles;
        }
    }

};

var benz = new vehicle("mercidies Benz", "Blue", "False");
console.log("color is :" + benz.color);