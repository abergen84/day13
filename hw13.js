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

function forEach(array, callback) {
    for (var i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
}

function forEachFilter(array, key, value) {
    "use strict";

    var list = [];

    forEach(array, function(x) {
        if (x[key] === value) {
            list.push(x);
        }
    })
    return list


    .map(function(x){

    	return { Description: x.brand + " " + x.model + " in the color " + x.color };
    
    });
    // forEach(array, function(x) {
    //     list.map(x);
    // })

    //return { Description: x.brand };

		

	};




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

//function ForEachMap(){







//console.log(phones);
