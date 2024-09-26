
///var,let & const variables

var a = 10
function f() {
    var b = 20
    //console.log(a, b)
}
f();
//console.log(a);

//// Rest Operator

function addNumber(a,b,c,...other){
    console.log(other);
    return a+b+c;

}

const res = addNumber(4,5,6,8,9)
console.log(res);

//// Spread Operator
var names = ["Akash","Vikas","Arti"];
function getNames(name1,name2,name3){
    console.log(name1,name2,name3);
}

getNames(names[0],names[1],names[2])
getNames(...names)


/// with objects
var students = {
    name : "Akash",
    age:"27",
    hobbies:["cricket","singing"]
}

const{...rest} = students;
console.log(rest)

///Spread

var newStudent= {
    ...students,
    age:"28"
}

console.log(newStudent)


//// Hoisting example 

function fruit(){
    console.log(name);
    console.log(price);

    var name = "apple";
    let price = 20;
}
fruit();