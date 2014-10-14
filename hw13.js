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
        callback(array[i], i, array);
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

    return list;
};


function forEachMap(array, callback){
		"use strict";
        
		var list = [];

        forEach(array, function(val, i, arr){
        	
        	list.push(callback(val, i, arr));

        })

        return list;
//        return { Description: val.brand + " " + val.model + " in the color " + val.color }

    };


function forEachReduce(array, callback, initialValue){
	"use strict";

	forEach(array, function(prev, cur, i, arr){

		return prev + cur;
	})

};





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

	list.forEach(function(val, i, arr) {

			array.push(val[propertyName]);

	})

	return array;
}


//Pluck Function for the Phones Array at the top
function pluck(array, propertyName, value){
	"use strict";

	var list = [];

	array.forEach(function(x) {
		if (x[propertyName] === value){

			list.push(x);
		}
	})

	return list;

};

//Reject Function for the Numbers example
var numbers = [1,2,3,4,5,6,7,8,9];

// function rejectSimple(list, predicate) {

// 	var array = [];

// 	list.forEach(function(x) {
// 		if ((x % 2) != ~~predicate){

// 			array.push(x);
// 		}
// 	})

// 	return array;
// };

function rejectSimple(list, predicate) {

	var array = [];

	list.forEach(function(x) {
		if(!predicate(x)){
			array.push(x)
		}
	})

	return array;
};

console.log(
	rejectSimple(numbers, function(val){
		return val%2===0;
	})
)

console.log(
	rejectSimple(numbers, function(val){
		return val <= 7 && val >= 3;
	})
)

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

//Find function
function find(list, predicate) {
	"use strict";

	var result;

	forEach(list, function(element, i, arr){
		if (predicate(element)){
			result += element;
		} 
	})

		return result;

};


// function find(list, predicate) {
// 	"use strict";

// 	var array = [];

// 	list.forEach(function(x) { 
// 		if ((x % 2) == ~~predicate){
// 			return x;
// 		}
// 	})

// };


var listOfPlays = [{
	title: "Cymbeline",
	author: "Shakespeare",
	year: 1611
}, {
	title: "The Tempest",
	author: "Shakespeare",
	year: 1611
}];

console.log(listOfPlays);

function where(list, properties){
	"use strict";

	var empty = [];

	forEach(list, function(val, i, arr){
		if(properties === ){
			empty.push(val)
		}
	})

	return empty;
}







