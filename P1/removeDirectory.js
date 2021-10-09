const fs1 = require("fs-extra");
  
const path = "./FullStack";
  
fs1.remove(path, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Folder Deleted Successfully !!");
  }
});