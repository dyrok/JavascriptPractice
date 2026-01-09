// how to declare functions : we need to call the "function key" then we have to name the 
// the function , then parenthesis then print the call statement .

function sayhello(fname) {
    console.log (` hello ${fname}`);
}
let fname = "prasad";

//or we can use the following code below because using let is also calling a fn.key which makes 
// the code heavier than it should be and it can be easier by using the below key.
sayhello('prasad');
sayhello(fname);

//function refrence :
sayhello;
console.log(sayhello); // gives reference of the code that has ben used 

// Arrow functions : start it with "const" then give the function , assign fn some value: 

const sayTwo =(fname , lname) => {
    console.log(` hello ${fname} ${lname}`);
};
sayTwo ('sandas');

// anonomyous function :

let greet = function (mname) {
    console.log(`i am anonomyous ${mname}`)
}
greet('irene');

// addition of numbers using func.
function sum(a, b) {
    return a + b;
}
sum(2, 3); //5
console.log(sum(2, 3));

// if else statement :

// other way of writing if-else

    true ? console.log(true) : console.log(false);
    0 ? console.log("This is true") : console.log("This is false");