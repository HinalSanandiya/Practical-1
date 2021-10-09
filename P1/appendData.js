const fs = require('fs');

console.log("\nFile Contents of file before append:", fs.readFileSync("test.txt", "utf8"));

fs.appendFile("test.txt", "World", (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("\nFile Contents of file after append:",fs.readFileSync("test.txt", "utf8"));
    }
});