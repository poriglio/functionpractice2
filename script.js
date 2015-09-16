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







// PROBLEM 7

var vowelFinder = function ( letter ) {

	vowelList = ["a","e","i","o","u","and sometimes","y"]

	for(i=0;i<vowelList.length;i++){
		if(letter === vowelList[i]){
			return true
		}
	}

};

var vowels = function ( string ) {

	var lettersArray = string.split("")
	
	var vowelsArray = lettersArray.filter(function(element){
	return vowelFinder ( element )
	
	});

	return vowelsArray

};

console.log(vowels("cats are the best creatures on earth"))







// PROBLEM 8

var testArray = ["a","a","cat","cat",1,1]

var testArray2 = ["a","b","b"]

var testArray3 = ["cat","dog",1,9]


// TEST WHETHER THE ARRAY IS OF EVEN LENGTH
var isEven = function ( array ) {
	if (array.length % 2 === 0 ) {
		return true
	}
	else {
		return false
	}
};

// TEST WHETHER A SINGLE PAIR IS IDENTICAL
var pairTest = function ( array, num ) {

	if( array[num] === array[num+1]) {
		return true
	}
	else{
		return false
		}
};

// TEST WHETHER ARRAY CONTAINS ONLY PAIRS OF IDENTICAL VALUES
var twins = function ( array ) {
	if(isEven(array)!==true){
		return false
	}
	else{
		for(var i = 0; i<array.length; i+=2){
			if(pairTest(array,i)){
				return true
			}
			else if((i===array.length-2)&&(!pairTest(array,i))){
				return false
			}
		}
	}
}

console.log(twins(testArray))








// PROBLEM 9

// IS THE ARRAY EMPTY?
var notEmpty = function ( array ) {
	if ( array.length > 0 ) {
		return true
	}
	else {
		return false
	}
}

// DOES THE ARRAY CONTAIN A TRUE?
var containsTrue = function ( array ) {	
	for(var i = 0; i < array.length; i++){
		if(array[i]){
			return true
		}
		else if(!array[i] && i===array.length-1){
			return false
		}
	}
}

// IS THE ARRAY BOTH NOT EMPTY AND ALSO CONTAINING A TRUE?

var or = function ( array ) {
	if(notEmpty(array)){
		return containsTrue(array)
	}
	else{
		return false
	}
}

var booleans1 = [false,false,true,5>2,0===0,1===0]
var booleans2 = [false,false,false,false]
var booleans3 = []

console.log(or(booleans2))






// PROBLEM 10

var friends = ["Melissa", "Shannon", "Danya", "Laura", "Melissa","Laura","Jesse"]

// DETERMINE WHETHER ELEMENT HAS ALREADY APPEARED IN THE ARRAY
var uniqueSoFar = function ( array, number ) {
	if(number===0){
		return true
	}
	else{
		for (var x = 0; x<number; x++){
			if (array[x]===array[number]){
				return false
			}
			else if ((x===number-1)&&(array[x]!==array[number])){
				return true
			}
		}
	}
}


// CREATE ARRAY WITH NO REPEAT VALUES
var unique = function ( array ) {
	var uniqueArray = array.filter(function(element,index,array){
		if(uniqueSoFar(array,index)===true){
			return true
		}
	})
	return uniqueArray
}


// TEST THE PROGRAM!
console.log(unique(friends))