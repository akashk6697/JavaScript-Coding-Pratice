// console.log("Hello");
// setTimeout(()=>{
//     console.log("Hello2");
// },3000)

// console.log("Hello3");
// let a = 3;

// a = 4;
// console.log(a*2);


const student = {
    fullName : "Akash Babu Kushwah",
     Age : "27",
     PassingYear :"2020"
}

console.log(student);

/// bind() method

let nameObj = { 
	name: "Tony"
} 

let PrintName = { 
	name: "steve", 
	sayHi: function () { 

		// Here "this" points to nameObj 
		console.log(this.name); 
	} 
} 

let HiFun = PrintName.sayHi.bind(nameObj); 
HiFun();


   /// call method

   let nameObj1 = { 
	name: "Tony"
} 

let PrintName1 = { 
	name: "steve", 
	sayHi: function (age) { 
		console.log(this.name + " age is " + age); 
	} 
} 

PrintName1.sayHi.call(nameObj1, 42);


//// apply method

let nameObj2 = { 
	name: "Tony"
} 

let PrintName2 = { 
	name: "steve", 
	sayHi: function (...age) { 
		console.log(this.name + " age is " + age); 
	} 
} 
PrintName2.sayHi.apply(nameObj2, [42]);

