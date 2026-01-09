
//1
let nums = String;
//2
let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
//3 find length of array
let len = numbers.length;
console.log("length of array is: " + len);

//4 first, middle, last element
let firstElem = numbers[0];
let middleElem = numbers[Math.floor(len / 2)];
let middleElem2 = numbers[(len / 2) - 1];
let lastElem = numbers[len - 1];

console.log("First element: " + firstElem);
console.log("Middle element: " + middleElem);
console.log("Middle element 2: " + middleElem2);
console.log("Last element: " + lastElem);


//5 declare an array called mixedDataTypes, put different data types in the array and find the length of the array
let mixedDataTypes = [10, "hello", true, 20.5, null, undefined, { name: "prasad" }, [1, 2, 3]];
let mixedLen = mixedDataTypes.length;
console.log("Length of mixedDataTypes array is: " + mixedLen);

//6 declare an array variable named itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies);

//7 print the array using console.log()
console.log("IT Companies: " + itCompanies);

//8 print the number of companies in the array
console.log("Number of IT Companies: " + itCompanies.length);

//9 print the first, middle and last company
let firstCompany = itCompanies[0];
let middleCompany = itCompanies[Math.floor(itCompanies.length / 2)];
let lastCompany = itCompanies[itCompanies.length - 1];

console.log("First Company: " + firstCompany);
console.log("Middle Company: " + middleCompany);
console.log("Last Company: " + lastCompany);

//10 print each company
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);
}

//11 print each company in uppercase
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase());
}

//12 print the array as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
let companiesSentence = itCompanies.slice(0, -1).join(", ") + " and " + itCompanies[itCompanies.length - 1] + " are big IT companies.";
console.log(companiesSentence);

//13 check if a certain company?"