/* 
 * 
 * Author: Kyler Schroeder
 * Created for: SDI Online
 * Week Four Project, Function Library.
 * 
 */


// validate phone number
function validNumber() {
	var num = '123-456-7890';
    var chopIt = num.split('-'); // this is an array containing the items

	for (var i = 0; i < chopIt.length; i++) {
		if(isNaN(chopIt[i])) {
    		console.log("Negative Ghost Rider."); // true, chopIt[i] is not a number
    	}
    	else {
    		console.log("Word.") // false, chopIt[i] is a number
    	}
	}

	var end1 = num.indexOf("-");
	var start2 = num.indexOf("-")+1;
	var end2 = num.lastIndexOf("-");
	var start3 = num.lastIndexOf("-")+1
	var end3 = num.length;
	
	console.log(num.substring(0, end1) + num.substring(start2, end2) + num.substring(start3, end3));

}

validNumber();

