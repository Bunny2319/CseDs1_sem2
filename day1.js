// Hoisting
greet();

function add(a, b) {
    return a + b;
}
const greet = () => {
    console.log("Hello First Year");
}
console.log(greet);
greet();

// Variable Hoisting
        console.log(a);
        var a = 24;                     // hoisting
        console.log(a);

        console.log(b);
        let a = 24;                     // not hoisting
        console.log(b);

// Arrow function : if greet is evoke here it don't run it is not hoisting
        const greet = () => {
            console.log("Hello Earth!!")
        }
        greet();

// Promise
const myPromise = new Promise((resolve, reject) => {
    let age = 20;
    if (age > 18) {
        resolve("Eligible for vote.")
    } else {
        reject("Not eligible for vote.")
    }
})
const checkVoteEligibility = async() => {
    const response = await myPromise;
    console.log(response);
}
checkVoteEligibility();
// myPromise
//     .then((response) => console.log(response))
//     .catch((error) => console.log(error.message));