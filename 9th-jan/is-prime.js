function isPrime(num) {
    if (num <= 1) {
        return false;
    };

    for (let i = 2; i < num; i++) { //checks if i is less than that num
        if (num % i === 0) {
            return false
        };

        return true;
    };

};

//needs user input (lets suppose 5)
//loops until the prime number used in num function 


