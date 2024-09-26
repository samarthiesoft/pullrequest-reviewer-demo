// reverseFileContent.js
const fs = require("fs");

// Get the file path from the command-line argument
const filePath = process.argv[2];

if (!filePath) {
    console.error(
        "Please provide a valid file path as a command-line argument."
    );
    process.exit(1);
}

// Function to reverse the content of a file
function reverseContent(content) {
    return content.split("").reverse().join("");
}

// Read the file content
fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
        console.error(`Error reading the file: ${err.message}`);
        process.exit(1);
    }

    // Reverse the file content
    const reversedContent = reverseContent(data);

    // Output the reversed content
    console.log("Reversed Content:\n", reversedContent);
});
