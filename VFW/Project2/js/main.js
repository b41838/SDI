/*   JavaScript Document
	 Kyler Schroeder
	 Project 2 - iPill Keeper
	 Visual Frameworks 1304
	 Full Sail University	*/
	
alert("hello");

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

var save = $('submit');
save.addEventListener("click", storeData);
