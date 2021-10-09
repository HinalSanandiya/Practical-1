var fs=require('fs');

fs.readFile('data.txt', (err, data) => {
	if (err)
		throw err;

	console.log("Content of the file :  " + data);
});