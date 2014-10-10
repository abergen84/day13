//console.log("test");

var phones = [{
    brand: "Apple",
    model: "iPhone6",
    color: "gold"
}, {
    brand: "Apple",
    model: "iPhone6Plus",
    color: "gold"
}, {
    brand: "Apple",
    model: "iPhone5S",
    color: "white"
}, {
    brand: "Samsung",
    model: "GalaxyS5",
    color: "white"
}, {
    brand: "Samsung",
    model: "GalaxyNote",
    color: "black"
}, {
    brand: "HTC",
    model: "One",
    color: "silver"
}, {
    brand: "Nokia",
    model: "Lumia",
    color: "black"
}];

console.log(phones);

function ForEach(list, callback) {
    for (var i = 0; i < list.length; i++) {
        callback(list[i], i);
    }
}

//Test
