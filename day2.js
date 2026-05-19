//  mapFilterReduce
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
num.forEach((n)=>console.log(n));

const multipleOf2 = num.map((n) => { return n * 2 });
console.log(multipleOf2);

const divisibeBy2 = num.filter((n) => n % 2 === 0);
console.log(divisibeBy2);

const sumOfNumArray = num.reduce((acc, val) => acc += val, 0);
console.log(sumOfNumArray);

//  fetch
/* fetch("https://fakestoreapi.com/product")
     .then((products) => products.json())
     .then((data) => console.log(data))
     .catch((error) => console.log(error.message)); */

const getData = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("fetch error");
    }
}
getData();

//  Set time out
const greet = () => {
    console.log("Hello CSE_DS");
}

console.log("Before setTimeout");
const fun = setTimeout(() => {
    console.log("Hello CSE_DS");
}, 3000);
console.log("After setTimeout");
clearTimeout(fun);