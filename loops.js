// countDownWhile(startingPoint, stoppingPoint)
function countDownWhile(startingPoint, stoppingPoint) {
    while (startingPoint >= stoppingPoint) {
        console.log('coundDownWhile: ' + startingPoint);
        startingPoint--;
    }
}

countDownWhile(10, 0);

// countDownFor
function countDownFor(startingPoint, stoppingPoint) {
    for (; startingPoint >= stoppingPoint; startingPoint--) {
        console.log('coundDownFor: ' + startingPoint);
    }
}

countDownFor(20, 10);


// loops and array is very similar too swift loops and array 

var name = ["John", "Smith", "Srarmi"];
for (var x = 0; x < name.length; x++) {
    console.log(name[x]);
}

name.push("Tom");

for (var x = 0; x < name.length; x++) {
    console.log(name[x]);
}

var whatever = ["jermy", true, 123];

var i = 0;
while (i < 10) {
    console.log("Iteration:" + i);
    i++;
}