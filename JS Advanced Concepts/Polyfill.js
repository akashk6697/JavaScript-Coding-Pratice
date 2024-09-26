///// Polyfill for bind method

let nameObj = { 
	name: "Tony"
} 

let PrintName = { 
	name: "steve", 
	sayHi: function () { 
		console.log(this.name); 
	} 
} 

Object.prototype.MyBind = function (bindObj) { 

	// Here "this" will be sayHi function 
	bindObj.myMethod = this; 
	return function () { 
		bindObj.myMethod(); 
	} 
} 
let HiFun = PrintName.sayHi.MyBind(nameObj); 
HiFun();

///// Polyfill for call method

let nameObj1 = { 
	name: "Tony"
} 

let PrintName1 = { 
	name: "steve", 
	sayHi: function (age) { 
		console.log(this.name + " age is " + age); 
	} 
} 

Object.prototype.MyCall = function (bindObj, ...args) { 
	bindObj.myMethod = this; 

	bindObj.myMethod(...args); 

} 
PrintName1.sayHi.MyCall(nameObj1, 42);


///// Polyfill for apply method

let nameObj2 = { 
	name: "Tony"
} 

let PrintName2 = { 
	name: "steve", 
	sayHi: function (age) { 
		console.log(this.name + " age is " + age); 
	} 
} 

Object.prototype.MyApply = function (bindObj, args) { 
	bindObj.myMethod = this; 

	bindObj.myMethod(...args); 

} 
PrintName2.sayHi.MyApply(nameObj2, [42]);
