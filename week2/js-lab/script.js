//Source: MDN - Math.random()
function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

//Source: MDN - Math.random()
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

var makeRandomList = function(n) {
	var foods = ["apple", "orange", "peach", "cereal", "sausage", "bread", "ketchup"];
	
	var list = [];
	for(var i=0; i<n; i++) {
		list.push({	name: foods[getRandomInt(0, foods.length)], 
					price: getRandomArbitrary(1, 50)});
	}
	return list;
}

var getTime = function(fxn, list) {
	var startTimeNormal = new Date().getTime();
	fxn(list);
	var endTimeNormal = new Date().getTime();
	var normalTime = endTimeNormal - startTimeNormal;
	return normalTime;
}

var getTotalPrice = function(list) {
	return normalLoop(list);
}

var normalLoop = function(list) {
	var total = 0;
	for(var i=0; i<list.length; i++) {
		total += list[i].price;
	};
	return total;
}

var forEachLoop = function(list) {
	var total = 0;
	list.forEach(function(item) {
		total += item.price;
	});
	return total;
}

var printShoppingList = function(num) {
	n = num;
	if(list === undefined) {
		if(n === undefined) {
			n = 5;
		}
		list = makeRandomList(n);
	}
	total = 0;

	normalTime = getTime(normalLoop, list);

	eachTime = getTime(forEachLoop, list);

	console.log("Total: $"+total.toFixed(2));

	console.log("n = "+list.length);
	console.log("Execution time for normal for loop: "+normalTime+" ms");
	console.log("Execution time for for-each loop: "+eachTime+" ms");
}

var addShoppingListToPage = function() {
	if(list === undefined) {
		list = makeRandomList(5);
	}
	var divSection = document.getElementById("shopping_cart");
	if(divSection === undefined || divSection === null) {
		divSection = document.createElement("div");
		divSection.id = "shopping_cart";
	}
	for(var i=0; i<list.length; i++) {
		var para = document.createElement("p");
		var node = document.createTextNode(list[i].name+"\t$"+list[i].price.toFixed(2)+"\n");
		para.appendChild(node);
		divSection.appendChild(para);
	}
	para = document.createElement("p");
	para.appendChild(document.createTextNode("Total: $"+getTotalPrice(list).toFixed(2)));
	divSection.appendChild(para);
}

var updateTotal = function() {
	var total = 0;
	for(var i=0; i<list.length; i++) {
		total += list[i].price;
	}
	var totalSection = document.getElementById("p_total");
	totalSection.innerHTML = "Total: $"+total.toFixed(2);
}

var addItemToList = function(item) {
	list.push(item);
	var divSection = document.getElementById("shopping_cart");
	if(divSection === undefined || divSection === null) {
		divSection = document.createElement("div");
		divSection.id = "shopping_cart";
	}
	var para = document.createElement("p");
	var node = document.createTextNode(item.name+"\t$"+item.price.toFixed(2)+"\n");
	para.appendChild(node);
	divSection.appendChild(para);
}

// var getItemFromUser = function() {
function getItemFromUser() {
	console.log("Submit");

	if(typeof list === 'undefined') {
		list = [];
	}
	var newName = document.getElementById("name").value;
	var newPrice = parseFloat(document.getElementById("price").value);
	var item = {name: newName, price: newPrice};

	addItemToList(item);
	updateTotal();
}