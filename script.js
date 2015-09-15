// FUNCTION PRACTICE 2

// PROBLEM #1

var getName = function ( object ) {

	return object.name 

};

console.log(getName({ name: 'Luisa', age : 25 }))

// PROBLEM #2

var totalLetters = function ( array ) {

	var newString = array.join("")
	return newString.length

};

console.log(totalLetters(["what", "happened", "to", "my", "function"]))

// PROBLEM #3

var keyValue = function ( key, value ) {

	var object = { key : value }
	return object

};

console.log(keyValue("city", "Denver"))

// PROBLEM 4

var negativeIndex = function ( array , negative ) {

	var indexFinder = function ( negative ) {
		if ( negative * -1 < array.length ) {
			return negative
		}
		else {
			return ( negative % array.length ) 
		}
	}

		var negative = array.length + indexFinder(negative)
		return array[indexFinder(negative)]
};

console.log(negativeIndex(["jerry","sarah","sally"],-1))

// PROBLEM 5

var removeM = function ( string ) {

	return string.split("m").join("")

};

console.log(removeM("memory"))

// PROBLEM 6

var printObject = function ( object ) {

	for ( property in object ) {
		console.log(property + " is " + object[property])
	}

}

printObject({ a : 10, b : 20, c : 30})


// // this is our sample object with 3 properties
// var sampleObject = { x:1, y:2, z:3  };

// var alertText = ' ';
// /*Put the name of your own object after "in",
//   and you can change the text "property"
//   to be whatever you please.
// */

// for (property in sampleObject) {

//  /*this will create one string with all the Javascript 
//   properties and values to avoid multiple alert boxes: */

//   alertText += property + ':' + sampleObject[property]+'; ';

// }

// alert(alertText);




// PROBLEM 7

var vowels = function ( string ) {

// 1. determine whether character is a vowel
// 2. if it is a vowel, push it to the array

}

console.log(vowels("What evil odd ducks!"))