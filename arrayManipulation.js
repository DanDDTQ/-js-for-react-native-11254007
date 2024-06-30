
// Function to process the array of numbers
function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num * num : num * 3);
}
// Exporting the function for use in other files
module.exports = { processArray };

// Function to format array of strings based on processed numbers
function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        const num = numbers[index];
        return num % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
    });
}

// Exporting the functions for use in other files
module.exports = { processArray, formatArrayStrings };