const fs = require('fs');
   
getCurrentFilenames();
   
fs.rename('test.txt', 'data.txt', () => {
  console.log("\nFile Renamed!\n");
   
  getCurrentFilenames();
});
   