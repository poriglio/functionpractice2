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

var booleans1 = [true,true,true,5>2,0===0,1===0]
var booleans2 = [false,false,false,false]
var booleans3 = []

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
var onlyTrue = function ( array ) {	
	for(var i = 0; i < array.length; i++){
		if(array[i]){
			return true
		}
		else if(!array[i] && i===array.length-1){
			return false
		}
	}
}


console.log(onlyTrue(booleans2))