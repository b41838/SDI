/* 
 * 
 * Author: Kyler Schroeder
 * Created for: SDI Online
 * Week Two project, Time to Slay the Dragon.
 * 
 */

// globals
var heroName = "Archer";
	dragonName = "Ysellian";
	startingGold = 100;
	items = ["blood", "ears", "teeth", "scales"];

// start tracking!  Proceedure
var getDirection = function(go) {
	direction = go
	goNorth = heroName + ": I see tracks and I will follow them North!";
	goWest = heroName + ": I see tracks and I will follow them West!";

	if(direction = "north") {
		return goNorth;
	}
	else {
		return goWest;
	}
};

// which way?  Boolean Function
var  fork = function(see, hear) {
	console.log(heroName + ": As I'm following " + dragonName + " I think to myself \"Did he see me?  Did he hear me?  Should I turn back and find another way?\" \n" + (see && Hear) + ", I will stay in pursuit!");
};

var tradeIn = function(tradeValue) {
	var price = 45;
		i = 16;
		count = i + tradeValue;
	
	console.log("Vendor: Hello traveler, you need a new voulge eh?  This is the finest steel in the region, that there will run you 45 gold pieces.");
	console.log(heroName + ": How about you give me" + tradeValue + " gold pices for this, and I\'ll pay the remainder.");
	console.log("Vendor: Deal!");
	console.log(heroName + ": Here\'s 15 gold pieces, let me find the rest.");
	while (i + tradeValue < 45) {
		console.log(heroName + ": Here\'s " + i);
		i++;
	}
	console.log(heroName + ": And 20 gold pieces!");
	console.log("And " + heroName + " was back to the trail.")
}

var deathBlow = function(move1, move2) {
	var weapon = "the Sword of Doom";
	
	console.log("After another week on the hunt " + heroName + " corners " + dragonName + " in his lair.");
	console.log(heroName + " grabs " + weapon + " and does a " + move1 + " with a " + move2 + " to deal the death blow!");
};

var store = function(total, fourItems) {
	var allTeeth = 10;
	
	console.log("Step right up and buy your very own piece of the dragon!  We got")
	for (var i = 0; i < fourItems.length; i++) {
		console.log(fourItems[i] + "!");
	}
	
	console.log("Teeth?  Buy them all for just " + total * allTeeth + " gold pieces!");
	
};

console.log(getDirection("north"));
fork(false, false);
console.log("After trailing the dragon for two weeks " + heroName + " realizes that the blade on his voulge has become dull.  Luckily a local weaponsmith has one for purchase.");
tradeIn(25);
deathBlow("backflip onto " + dragonName + "\'s back", "flying downward thrust");
console.log("After relishing in his victory " + heroName + " dismantles the beast and takes his trophies and goods back to his village.");
console.log("Here, " + heroName + " sets up shop with the spoils of his now famous dragon kill.")
store(100, items);
