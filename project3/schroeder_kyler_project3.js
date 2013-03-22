/* 
 * 
 * Author: Kyler Schroeder
 * Created for: SDI Online
 * Week Three project, Interview with Tardar!.
 * 
 */


var grumpyCat = {
	name: "Tardar Sauce",
	grumpy: true,
	hatedThings: 1.7976931348623157E+10308,
	iHateMost: [ "spring", "outdoors", "christmas", "flowers", "babies", "people", "barney", "smiles", "internet explorer", "cuddly things", "friskeys", "unicorns", "you"],
	brother: [ pokey, "Pokey" ],
	isGrumpy: function() {
		var grump = grumpyCat.grumpy;
		return (grump);
	},
	indecision: function(bleh) {
		grumpyCat.iHateMost[8] = bleh;
		return bleh;
	}
}

var pokey = {
	relationship: "little brother"
}

function func1(x, y) {
	return console.log("I " + x + " at sxsw, it was " + y) + ".";
}

function func2(love, hate) {
	console.log("Someone asked me if I hate my little brother.  Do i?")
	for(var i = 0; i < love.iHateMost.length; i++) {
		if(grumpyCat.iHateMost[i] = hate) {
			console.log("Yes, is that mean?  GOOD.")
			return;
		}
		else {
			console.log("I don\'t hate Pokey, just you.")
			return;
		}
		
	}
}



function func5(boom) {
	var thisMany = 100;
	var i = 0;
	
	console.log("Tardar, count how many things make you grumpy.");
	
	while(i < thisMany) {
		console.log(i); 
		i+=10;
	}
	
	console.log("Ok, Ok.  That's a lot of grump, approxamently how many things total make you grumpy?");
	return (boom);
	console.log(boom);
}


var1 = func1("took pictures", "aweful"); // string
var2 = func2(grumpyCat, grumpyCat.brother[0]); // object, array
console.log("I wonder, is Tardar grumpy right now?  " + grumpyCat.isGrumpy() + "."); // boolean

console.log("I take it back, I don't hate Internet Explorer, I just hate " + grumpyCat.indecision("Microsoft"));
var5 = func5(grumpyCat.hatedThings); // number
console.log(grumpyCat.hatedThings);
