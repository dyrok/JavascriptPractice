function isPrime(num) {
    if (num <= 1) {
        return false;
    };

    for (let i = 2; i < num; i++) { //checks if i is less than that num
        if (num % i === 0) {
            return false
        };

    };
    return true;
    
};

//needs user input (lets suppose 5)
//loops until the user input number is equal to or greater last prime number
let i = 2;
let userInput = parseInt(prompt("Enter a number: "));
let primes = []

do {
    switch (isPrime(i)) {
        case true:
            primes.push(i);
            break;
        case false:
            break;
    }
    i++
} while ( i <= userInput);

console.log(`Prime numbers less than ${userInput} are: ${primes.join(', ')}`);


