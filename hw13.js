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

function ForEach(array, callback) {
    for (var i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
}

function ForEachFilter(array, key, value) {
    "use strict";

    var list = [];

    ForEach(array, function(x) {
        if (x[key] === value) {
            list.push(x);
        }
    })
    return list;
}



// function ForEachFilter(a){
// 	"use strict";

// 	var list = [];

// 	ForEach(array, function(x){
// 		if (x.brand === a){
// 			list.push(x);
// 		}
// 	})
// 	return list;
// }








// .filter(function(x){
// 	return x.brand === "Apple";
// });




//console.log(phones);

// function map(list, transform) {
//     var mapped = [];
//     for (var i = 0; i < list.length; i++)
//         mapped.push(transform(list[i]));
//     return mapped;
// }
