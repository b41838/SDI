/*   JavaScript Document
	 Kyler Schroeder
	 Project 2 - iPill Keeper
	 Visual Frameworks 1304
	 Full Sail University	*/
	
//alert("hi");

window.addEventListener("DOMContentLoaded", function() {

	function $(x) {
		var theElement = document.getElementById(x);
		return theElement;
	}

	//alert("this works");

	var myText = document.getElementById("pillName");

	var applyBorder = function() {
		myText.setAttribute("class", "activeBox");
	}

	var removeBorder = function() {
		myText.removeAttribute("class", "activeBox");
	}

	myText.addEventListener("focus", applyBorder);
	myText.addEventListener("blur", removeBorder);

	function storeData() {
		var id				= math.floor(Math.random()*1000001);
	
		var item			= {};
		item.date			= ["Date:", $('date').value];
		item.sugar			= ["Sugar Level:", $('sugarLevel').value];
		item.pillName		= ["Pill Name:", $('pillName').value];
		item.quantity		= ["Pill Quantity:", $('quantity').value];
		//item.required		= ["Is Required:", $('req').value];
		item.notes			= ["Notes:", $('notes').value];
	
		// save into LocalStorage
		localStorage.setItem(id, JSON.stringify(item));
		alert("Save Successfull!");
	}

	function getData() {
		toggleControls("on");
		// write data from localStorage to browser

		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$('items').style.display = "block";
		for (var i=0, len=localStorage.length; i<len; i++) {
			var makeLi = document.createElement('li');
			makeList.appendChild(makeLi);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			// convert string from localStorage value to object using JSON.stringify
			var obj = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			for (var n in obj) {
				var makeSubLi = document.createElement('li');
				makeSubList.appendChild(makeSubLi);
				var optSubTest = obj[n][0]+" "+obj[n][1];
				makeSubLi.innerHTML = optSubText;
			}
		}
	}

	function clearData() {
		if(localStorage.length === 0) {
			alert("There is no data to clear.")
		} else {
			localStorage.clear();
			alert("All data has been cleared.");
			window.location.reload();
			return false;
		}
	}

	var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clearLink');
	clearLink.addEventListener("click", clearData);
	var save = $('submit');
	save.addEventListener("click", storeData);

});