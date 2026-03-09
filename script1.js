// Primitive datatype
let name="Anjali";
console.log(typeof name);
console.log(name);      //print on screen

let age=18;
console.log(typeof age);

let isStu=true;
console.log(typeof isStu);

let score;
console.log(typeof score);

let car=null ;
console.log(typeof car);

let student={
    name:"Anjali",
    age:25,
    isStu:true,
    email:"anjali@me"
}
console.log(student);

//   ARITHMETIC OPERATOR
let a = 10;
let b = 5;
console.log("Addition = " , a+b);
console.log("Subtraction = ", a-b);
console.log("Multiplication =", a*b);
console.log("Division =",a/b);
console.log("Remainder =", a%b);
console.log("Pre Increment =", ++a);
console.log("Post Increment =", a++);
console.log("Pre Decrement =", --a);
console.log("Post Decrement =", a--);   

// ASSIGNMENT OPERATOR
let c = 10;
console.log(c+=3);
console.log(c-=1);
console.log(c*=2);
console.log(c/=2);

//     COMPARISON OPERATOR
let ab = 10;
let vb = "10";
let bb = 14
console.log(ab==vb);
console.log(ab===vb);
console.log(ab>=bb);
console.log(ab<=bb);
console.log(ab<bb);
console.log(bb<ab);
console.log(ab!=bb);      

//      STRING OPERATOR
let an = "Jatin ";
let bn = "Rajput";
console.log(an+bn);

//      TERNARY OPERATOR
let yr = 20;
let status = (yr >= 18) ? 'Adult' : 'Minor' ;
console.log(status);  

