function Phone(brand, price, color, name) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.name = name;
}

Phone.prototype.printInfo = function() {
	console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ', price is ' + this.price + ' and the owner is ' + this.name + '.');
}

var iPhone6S = new Phone('Apple', 2250, 'silver', 'Adam');
var SamsungGalaxyS6 = new Phone ('Samsung Galaxy S6', 1234, 'black', 'Ewa');
var OnePlusOne = new Phone ('OnePlus One', 4321, 'red', 'Jan');

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();