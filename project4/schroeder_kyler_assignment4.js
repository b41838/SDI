/* 
 * 
 * Author: Kyler Schroeder
 * Created for: SDI Online
 * Week Four Project, Function Library.
 * 
 */


// Does a string follow a 123-456-7890 pattern like a phone number?
function validNumber(gimme) {

    var chopIt = gimme.split('-'); // this is an array containing the items

	if(chopIt.length === 3) {

		for (var i = 0; i < chopIt.length; i++) {
			if(isNaN(chopIt[i])) {
    			return false; // true, chopIt[i] is not a number
    		}
    	}
    	if(chopIt[0].length === 3 && chopIt[1].length === 3 && chopIt[2].length === 4) {		
			return true;
		} else {
			return false;
		}
	}
}

// Does a string follow an aaa@bbb.ccc pattern like an email address?
function emailVal(email) {
	
	var splitIt = email.split("@"); // split address at the @ symbol
	
	if(splitIt.length !== 2) {
		return false;
	}
	
	var splitIt2 = splitIt[1].split(".");
	
	if (splitIt2.length !== 2) {
		return false;
	}
	
	if(splitIt2[1].length === 3) {
		return true;
	} else {
		return false;
	}
};


// Is the string a URL? (Does it start with http: or https:?)
function isURL(url) {
	
	var urlIs = url.split(":");
	
		if(urlIs[0].length === 4) {
			if(urlIs[0] === "http") {
				return true;
			} else {
				return false;
			}
		} 
		
		if(urlIs[0].length === 5) {
			if(urlIs[0] === "https") {
				return true;
			} else {
				return false;
			}	
		} return false;
	
	
};


// Title-case a string (split into words, then uppercase the first letter of each word)
function titleCase(something) {
	
	var cap = something.split(" ");
	var result = "";
	
	for (var i = 0; i < cap.length; i++) {
		var whatever = cap[i].replace(cap[i].charAt(0),(cap[i].charAt(0)).toUpperCase());
	
		result = result.concat(whatever + " ");
	};
	
	return result;
	
	
};


/* Given a string that is a list of things separated by a given string, as well as another string separator,
   return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c". */
function separator(word,sep1,sep2) {
	var split = word.split(sep1);
	var newWord = '';
	for (var i=0; i < split.length - 1; i++ ) {
		if (i === split.length -2) {
			newWord+= split[i];
		} else {
			newWord += split[i] + sep2;
		}
	}
	return newWord;
};


// Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
function decimalPlaces(number, place) {
	var newNumber = number.toFixed(place);
	return newNumber;
	
	
};


// Fuzzy-match a number: is the number above or below a number within a certain percent?
function fuzzyMatch(num1, num2, percentage) { 
		var results = [];
		if (num1 >= num2) {
			results[0] = "Greater Than Or Equal To";
			if (num1/num2 >= percentage) {
				results[1] = "Outside Percentage";
			} else {
				results[1] = "Within Percentage";
			}
		} else {
			results[0] = "Less Than"
			if (num1/num2 >= percentage) {
				results[1] = "Outside Percentage";
			} else {
				results[1] = "Within Percentage";
			}
		}
		return results;
}

// Find the number of hours or days difference between two dates.
function differenceDates(date1,date2,bool) {  // True is Days, False is Hours
	var diff = date1-date2;
	if (bool) {
		return Math.abs(diff/1000/60/60/24);
	} else {
		return Math.abs(diff/1000/60/60);
	}	
};


// Given a string version of a number such as "42", return the value as an actual Number, such as 42.
function stringVersion(number) {
	return parseInt(number);
	
	
};


// Find the smallest value in an array that is greater than a given number
function biggerThan(array, minValue) {
	array.sort(function(a, b) {
		return a-b;
	});
	if(minValue >= array[0] && minValue < array[array.length - 1]) {
		array.push(minValue);
		array.sort(function(a, b) {
			return a-b;
		});
		
		var biggerValue = array[array.indexOf(minValue) + 1];
		return biggerValue;
	}
	else {
		return null;
	};
};


// Find the total value of just the numbers in an array, even if some of the items are not numbers.
function totalOfNumbers(array) {
	var sum = 0;
	
	for(var i = 0, j = array.length; i < j; i++) {
		if(array[i]/1 === array[i]) {
			sum += array[i];
		};
	};
	
	return sum;
};


/* Given an array of objects and the name of a key, return the array sorted by the value of that key in each
   of the objects: "a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].*/
function sortedArray(array, key) {
	
	    return (array.sort(function(a,b) {
	    	return a[key] - b[key];
	    }));
};


// Validated a phone number
validNumber("123-456-7890");

// validated an email adress
emailVal("hello@me.com");

// validate http vs https
isURL("https://www.irock.com");

// capitalize first character in each word
var capital = titleCase("hello my name is kyler.");
console.log(capital);

// replace seperator with new seperator
var newSep = separator("a,b,c,", ",", "/");
console.log(newSep);

// change decimal to specified place
var newDec = decimalPlaces(3.14657, 2);
console.log(newDec);

// fuzzy match numbers
var ok = fuzzyMatch(5, 10, 50);
console.log(ok);

// compare two dates
var blah = differenceDates(new Date(2015, 6, 1),new Date(2015, 6, 3),false)
console.log(blah);

// turn string into num
var newNum = stringVersion("42");
console.log(newNum);

// Find the smallest number that is bigger than the passed argument
var unorderedArray = [7, 4, 1, 9, 16, 2, 42, 17];
console.log(biggerThan(unorderedArray, 5));

// Finds the sum of all numbers in a mixed array.
var mixedArray = ["10", 4, false, "moonshine", 8, 27, "no"]
console.log(totalOfNumbers(mixedArray));

// Sorts array by key
var nonSortedArray = [{a:1}, {a:5}, {a:3}, {a:2}, {a:4}, {b:1}];
console.log(sortedArray(nonSortedArray, "a"));
