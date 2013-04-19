/*   JavaScript Document
	 Kyler Schroeder
	 Project 2 - iPill Keeper
	 Visual Frameworks 1304
	 Full Sail University	*/
	
alert("hi");

window.addEventListener("DOMContentLoaded", function() {

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

/*function storeData() {
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
}*/

/*function storeData() {
	localStorage.setItem("test", "hello");
	alert(localStorage.length);
}*/

var save = $('submit');
save.addEventListener("click", storeData);

});