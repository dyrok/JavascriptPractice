
// Create a new Date object in index.js called `currentDate` and log the current date and time
// Create a function `formatDate` that takes a Date object and returns a formatted string in the format 'dd-mm-yyyy'
// Export the `formatDate` function using ESM syntax from `index.js`

const currentDate = new Date();
console.log(currentDate);

export function formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    if (10 > month) {
        month = "0" + month;
    }
    
    return `${day}-${month}-${year}`;

}

console.log(formatDate(currentDate))