const fs = require('fs');

fs.unlink('data.txt', (err) => {
    if (err) {
        throw err;
    }

    console.log("File is deleted.");
});