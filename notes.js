// 1. prefer not to use var keyword for variable declarations, as it causes problem in funcitonal scopes
console.log("hello world");

let name = "Tushar"
const surname = "Jain"

console.table([name,surname])

"use strict"; //2. treat all JS code as newer version of JS
//3. JS ka engine browser mae chupa hua hae
//4. JS ignores spaces
//5. Documentation : For standards we can use tc39.es and otherwise mdn docs are good
//6. General data types : number,bigint,string,boolean,null(a standalone value in JS), undefined,symbol (used to find uniqueness) and Objects
//7. an undeclared variable is treated as undefined 

console.log(typeof "tushar")

//8. undefined is a type in itself a data type but null is an object
console.log(typeof null)  //will give output as object
console.log(typeof undefined); //undefined

//9. data types conversion
let score = "33"
console.log(typeof(score)) //string but we need to be a number so ::

let valueinNum = Number(score)
console.log(typeof(valueinNum))

//10. 33abc after converting to number will be a NaN, null after converting to number would be a 0 and undefined after converting to number would be a NaN, and again a string would be NaN
/*11. let isloggedin = 1 
let boollogin = Boolean(isloggedin)
console.log(boollogin) => will give output true */

//12. empty string converts to false and any string would be true
//13. Generally data types are divided and categorised on the basis of how they are kept in and accessed from the memory and such related things
//14. Primitive dt : String,Number,Boolean,null,undefined,Symbol,BigInt = total 7 // call by value
//15. Refrence type dt or Non-primitive : Array, Objects,Functions //call by refrence
//16. JS is dynamically typed language

//17. Declaring symbol
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id === anotherid)
//console.log(id === anotherid) //output is false coz symbol makes them unique
//bigInt : const num = 123456789012345n is now bigint

//18. Array  : const heros = ["Hero1","Hero2","Hero3"]
//19. Objects : enclosed within {}
/*let myObj =  {
    name:"Tushar",
    age:22    
    }
*/

//20. Functions can be treated as variables in JS : normal declaration : function(){}
const myfun = function() {
    console.log("Hello hi");
}
myfun();

//21. the data type of all non-primitive data types when found using typeof is generally said as functions && for function=> object function
//22. Stack(Primitive data types are stored and it gives a copy of the object stored) and Heap Memory(Non-Primitive data types are stored and this memory gives a refrence of the stored value)
//23. String Interpolation `` , it creates placeholders for objects 
const name1="Tushar"
const age1=22
console.log(`Hello! My name is ${name1} and my age is ${age1}`)
//advantage is it can be changed during run-time and is a modern syntax
//24. Another way of declaring string
const string_declare = new String('YES NO') //this method creates an string object with key and value pairs and it also offers various prototypes
//allocated in heap so is refrence

//this are some of the methods of string
console.log(string_declare)
console.log(string_declare[0])
console.log(string_declare.length)
console.log(string_declare.toLocaleLowerCase());
console.log(string_declare.charAt(2))
console.log(string_declare.indexOf('N'));

const newstring = "     heheheheh     "
console.log(newstring)
console.log(newstring.trim()); //removes the extra spaces

const url="https://tusharjain/tushar%20profile"
console.log(url.replace('%20','-'));

//25. Playing with numbers
const num = 123.8966
console.log(num.toPrecision(3));
console.log(num.toFixed(2));

const bignum = 10000000
console.log(bignum.toLocaleString('en-IN'));

//26. Math is a very powerful library in JS and has lot of methods and functions
//27. Math.ceil(4.3) .ceil rounds off the given integer to the next bigger int whereas Math.floor(4.3) round off the given integer to the prev small integer value
console.log(Math.ceil(4.2));
console.log(Math.floor(4.6));
// and for general rounding use round function
const max=10;
const min=5;

console.log(Math.floor(Math.random()*(max-min+1))+min)

//28. Date and Time
let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON())
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());

//creating date
let mycreateddate = new Date(2024,7,23)
console.log(mycreateddate.toLocaleString());

console.log(myDate.getTime()) //converts it to milliseconds
//time stamps
let timestamp = Date.now();
console.log(timestamp);

//29. Array : collection of multiple items in a single variable
const myarr = [0,1,2,3,true,false,'Hi']
console.log(myarr);

//copying arrays always creates shallow copies (refrences are same) 
const myarr2 = new Array(1,2,3,4)
console.log(myarr2);
myarr2.push(5)
console.log(myarr2);
myarr2.pop()
console.log(myarr2);
const newarr = myarr2.join()
console.log(newarr); //type is string

//slice and splice
//spread operator and concat
const dc_heros = ["superman","ironman"]
const marvel_heros = ["thor","flash"]

const all_heros = dc_heros.concat(marvel_heros)
console.log(all_heros);

const all_heros_1 = [...dc_heros,...marvel_heros] //prefer this as it can have any number of arguments and separates the array elements into individual elements
console.log(all_heros_1)

const complex_arr = [1,2,3,[4,5],6,[1,2,[3,[4,5]]]]
console.log(complex_arr.flat(Infinity)) 

//30. Objects : Keys and value pairs

//object literals
const mySym = Symbol("key1")

const Jsuser = {
    name : "Tushar",
    age : 19,
    [mySym] : "value1", //correct syntax to refer and use a symbol
    location : "Kota" ,
    email : "@gmail.com",
    isLoggedIn : false,
    lastLogin : ['Monday','Friday'],
}

console.log(Jsuser["age"]);
console.log(Jsuser[mySym]);

//changing elements 
Jsuser.email="tushar@gmail.com"
console.log(Jsuser["email"]);

console.log(Jsuser);

Jsuser.greeting = function () {
    console.log("Hi! how r u ?");
}
console.log(Jsuser.greeting());

Jsuser.greetingtwo = function () {
    console.log(`Hi! How r u ? ${this.name}`)
}
console.log(Jsuser.greetingtwo());

console.log(Object.keys(Jsuser))
console.log(Object.values(Jsuser))
console.log(Object.entries(Jsuser))

// //freezing elements so no changes are allowed
// Object.freeze(Jsuser)

//singleton const user = new Object()
const InstaUser = new Object ()
InstaUser.id = "123abc"
InstaUser.name = {
    userfullname: {
        firstname: "tushar",
        lastname: "jain",
    }
}

console.log(InstaUser);
console.log(InstaUser.name.userfullname.firstname);
//Object.assign() use to combine objects
const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}
const obj3 = {5:'e',6:'f'}
const obj4 = Object.assign({},obj1,obj2,obj3)   //(target---> {},sources...........)
console.log(obj4);
//another method
const obj5 = {...obj1,...obj2,...obj3}
console.log(obj5);

//Object.hasOwnProperty('Property Name') 

//31. Rest operator in function ... : binds the arguments into a bundle
function cartvalue (...num) {
    return num;
}
//simply rest all
console.log(cartvalue(200,400,600))
//symbol of rest and spread operators are same, however they differ in their usage

//32. Passing object in function
const userone = {
    username :'Tushar',
    price : 199
}
function handleobject(anyobject) {
    console.log(`The user ${anyobject.username} has amount ${anyobject.price}`);
}
handleobject(userone)

//33. Global and Local Scope
//34. Hoisting
//35. This keyword is always used to refer to current context 
const user = {
    name : 'Tushar',
    welcome : function() {
        console.log(`${this.name}, welcome to the arena`);
        console.log(this); //will show the current context
    }
}
user.welcome()
user.name = "Rakesh" //context changed
user.welcome()

//36. Arrow functions
const chai = () => {
    let username = "hitesh"
    console.log(this); //will give an empty object
}
chai()

//when we use {} we have to give a return statement but when we use () we dont need a return statement
const addtwo = (num1,num2) => (num1 + num2)
console.log(addtwo(10,10));

//37. Immediatley Invoked Function Expression IIFE - (function definition)(execution) - it is used to get rid of the pollution caused due to global scope and global variables
(function chai() {
    console.log("DB CONNECTED");
})(); //we need to add a semi-colon after IIFE to tell where the scope of function ends

((name) => {
    console.log(`DB CONNECTED TO ${name}`);
})('SQL Lite');

//38. === checks both the value equality as well as the data type equality, == checks only value
/*39. if( condition ) {
    scope of if block
}
    else {
        scope of else block in case if is false    
}
*/
// var keyword scope is global so avoid using it.. its good to use const or let

//40. Switch 
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
//default case is executed when no condition matches

//41. falsy values : false,0,-0,BigInt 0n,"",null,undefined,nan 
//42. Truthy valuse : "0",'false'," ",any value in a string expect an empty string is true,[],{},function(){}
//43. Nullish coalescing operator (??) 
//44. Terniary Operator -- condition ? true : false
//45. Loops
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
//46. for each loop doesn't return any value.. its undefined
//47. High Order Array loops 
const arr = [1,2,3,4,5]
for (const i of arr) {
    console.log(i)
}
//it automatically increments the iterator

//48. Map object holds the key-value pairs and remembers the original insertion order of keys... have only unique keys
const map = new Map();
map.set('IN','India')
map.set('USA','United States of America')
map.set('FR','France')
console.log(map)

for (const [key,value] of map) {
    console.log(key,'-',value);
}

//49. forof loop cannot iterate objects, however for objects we can use forin loops
const myobj1 = {
    js : 'javascript',
    cpp : 'c++',
    py : 'python',
    rb : 'ruby'
}
console.log("           ");
for (const key in myobj1) {
    // console.log(key,'-',myobj1[key]);
    console.log(`${key} value is ${myobj1[key]}`);
}
//in case of arrays forof loop prints the values directly but forin loops will print the keys or say index
//map is not an iteratable object

//50. forEach loop takes a call back function as paramater
const coding = ['rb','py','c++','js']
// coding.forEach( function (item) {
//     console.log(item);
// } )

//using arrow functions
//because forEach takes a call back function we dont need to provide the function with a name
coding.forEach( (item,index,arr) => {
    console.log(item,index,arr);
} )

// coding.forEach( (item) => {
//     console.log(item);
// } )

//foreach on objects
const mycoding = [ 
    {
        name:'C++',
        filename:'cpp'
    },
    {
        name:'Python',
        filename:'py'
    },
    {
        name:'Javascript',
        filename:'js'
    }
]

//now here item will be an object
mycoding.forEach( (item) => {
    console.log(`${item.name} has filename ${item.filename}`);
})

//51. filter also accepts a call back function
const nums = [1,2,3,4,5,6,7,8,9]
const newnums = nums.filter( (number) => {
    return number>4
})
console.log(newnums);

//52. similarly there is a map function too, and also accepts a callback function
const add_ten = nums.map( (num)=> num+10)

console.log(add_ten);

//53. chaining of functions
const chain = add_ten.map( (num)=> num*10).map( (num) => num+1)
console.log(chain);
const chain_filter = add_ten.map( (num)=> num*10).map( (num) => num+1).filter( (num) => num>140)
console.log(chain_filter);
//we can even use filter and map together

//54. reduce method
const numbers = [1,2,3]
const mytotal = numbers.reduce( (acc,curr)=> acc+curr,0)
console.log(mytotal);

//55. innerText in DOM shows only the visible text on the page whereas the textContent shows the whole content of text whether visible or not 
//innerHTML shos the whole HTML 

//56. Document.querySelector() and Document.querySelectorAll creates a nodelist which is not an array
//57. HTML collection needs to be converted to array to enable looping on it 
// Array.from(element/variable to be converted to array)

