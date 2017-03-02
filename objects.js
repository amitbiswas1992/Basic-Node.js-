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