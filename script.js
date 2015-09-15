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
