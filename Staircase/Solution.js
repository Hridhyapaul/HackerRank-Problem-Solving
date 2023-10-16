// ================ Solution 01 =================

function staircase(n) {
    // Loop through each step
    for (let i = 1; i <= n ; i++) {
        // Calculate the number of spaces needed before the #
        const spaces = ' '.repeat(n - i);
        
        // Calculate the # symbols for the step
        const hashes = '#'.repeat(i);
        
        // Combine spaces and # symbols and print the step
        console.log(spaces + hashes);
    }
}

// Example: Call the function with n = 6
staircase(6);

// ================ Solution 02 =================