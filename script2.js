//          CONDITIONAL LOOP
let a = 50;
let b = 30;
if(a > b){
    console.log(a,"is greater than", b);
}else if(b > a){
    console.log(b,"is greater than", a);
}else{
    console.log("It is same...")
}

let fruit = "apple";
let message = "";

switch (fruit) {
    case "banana":
        message = "It's a banana!";
        break;
    case "orange":
        message = "It's an orange!";
        break;
    case "apple":
        message = "It's an apple!";
        break;
    default:
        message = "Unknown fruit";
}

console.log(message);

//          LOOP
//      FOR
let n = 10;
console.log("First 10 natural number : ")
for(let i = 1 ; i<=n ; i++){
    console.log(i);
}

//      WHILE
console.log("Table of 2 :");
let num = 1
while( num < 11){
    console.log(2 ,"x", num, "=", 2*num);
    num++;
}

//      DO-WHILE
console.log("Numbers :")
let i = 1;
do{
    console.log(i);
    i++;
}while(i<=3);