/* 
 * 
 * Author: Kyler Schroeder
 * Created for: SDI Online
 * Week Four Project, Function Library.
 * 
 */


// Does a string follow a 123-456-7890 pattern like a phone number?
function validNumber(gimme) {
	// var gimme = 0;
    var chopIt = gimme.split('-'); // this is an array containing the items

	for (var i = 0; i < chopIt.length; i++) {
		if(isNaN(chopIt[i])) {
    		console.log("Negative Ghost Rider."); // true, chopIt[i] is not a number
    	}
    	else {
    		console.log("Word.") // false, chopIt[i] is a number
    	}
	}

	var end1 = gimme.indexOf("-");
	var start2 = gimme.indexOf("-")+1;
	var end2 = gimme.lastIndexOf("-");
	var start3 = gimme.lastIndexOf("-")+1
	var end3 = gimme.length;
	
	console.log(gimme.substring(0, end1) + gimme.substring(start2, end2) + gimme.substring(start3, end3));

	/*var whereDash = gimme.length;
	for (var ni = 0; ni <= whereDash; ni++) {
		if (gimme.substring(ni, ni+1) === "-") {
			// return ni+1;
			console.log("1");
			for (var j = ni; j <= whereDash; j++) {
				if gimme.substring(j, j+1) === "-")
				console.log("2");
			}
		}
	}*/

}

// Does a string follow an aaa@bbb.ccc pattern like an email address?
function emailVal() {
	
	
	
};


// Is the string a URL? (Does it start with http: or https:?)
function isURL() {
	
	
	
};


// Title-case a string (split into words, then uppercase the first letter of each word)
function titleCase() {
	
	
	
};


/* Given a string that is a list of things separated by a given string, as well as another string separator,
   return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c". */
function separator() {
	
	
	
};


// Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
function decimalPlaces() {
	
	
	
};


// Fuzzy-match a number: is the number above or below a number within a certain percent?
function fuzzyMatch() {
	
	
	
};


// Find the number of hours or days difference between two dates.
function differenceDates() {
	
	
	
};


// Given a string version of a number such as "42", return the value as an actual Number, such as 42.
function stringVersion() {
	
	
	
};


// Find the smallest value in an array that is greater than a given number
function biggerThan() {



}


// Find the total value of just the numbers in an array, even if some of the items are not numbers.
function totalOfNumbers() {



};


/* Given an array of objects and the name of a key, return the array sorted by the value of that key in each
   of the objects: "a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].*/
function sortedArray(array, key) {
	
	    return (array.sort(function(a,b) {
	    	return a[key] - b[key];
	    }));
};



// validNumber("123-456-7890");

// Sorts array by key - totally works!
var nonSortedArray = [{a:1}, {a:5}, {a:3}, {a:2}, {a:4}, {b:1}];
console.log(sortedArray(nonSortedArray, "a"));
