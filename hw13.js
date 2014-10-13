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

<<<<<<< HEAD
function ForEach(list, callback) {
    for (var i = 0; i < list.length; i++) {
        callback(list[i], i); 
        for (map.)
   var a = list.filter.
    }
}

// function filter(list, test) {
//     var passed = [];
//     for (var i = 0; i < array.length; i++) {
//         if (test (list[i])
//         passed.push(list[i]);    
//     }
//     return passed;
// }


// function map(list, transform) {
//     var mapped = [];
//     for (var i = 0; i < list.length; i++)
//         mapped.push(transform(list[i]));
//     return mapped;
// }
=======
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


        .map(function(x) {

        return {
            Description: x.brand + " " + x.model + " in the color " + x.color
        };

    });

};

// forEach(array, function(x) {
//      list.map(x);
//  })

//  return { Description: x.brand };

var stooges = [{
	name: "Moe",
	age: 48
}, {
	name: "Larry",
	age: 50
}, {
	name: "Curly",
	age: 60
}];

//Pluck Function for the Stooges example
function pluckSimple(list, propertyName) {

	var array = [];

	list.forEach(function(x) {

			array.push(x[propertyName]);

	})

	return array;
}


//Pluck Function for the Phones Array at the top
function pluck(array, propertyName1, value){
	"use strict";

	var list = [];

	array.forEach(function(x) {
		if (x[propertyName1] === value){

			list.push(x);
		}
	})

	return list;

};

//Reject Function for the Numbers example
var numbers = [1,2,3,4,5,6,7,8,9];

function rejectSimple(list, predicate) {

	var array = [];

	list.forEach(function(x) {
		if ((x % 2) != ~~predicate){

			array.push(x);
		}
	})

	return array;
};



//Reject Function for the Phones Array at the top
function reject(array, predicate, value){
	"use strict";

	var list = [];

	array.forEach(function(x) {
		if (x[predicate] != value){

			list.push(x);
		}
	})

	return list; 
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



>>>>>>> 98c04fc067768d0344fff859dec77abc9cb9168e




//console.log(phones);
