var fs = require('fs');
var https = require("https");

// Deletes a directory
function deleteDirectory(src) {
    // Ensure the directory exists
    if (fs.existsSync(src) && fs.lstatSync(src).isDirectory()) {
        // Get each item in the directory
        fs.readdirSync(src).forEach(function (item) {
            var srcPath = src + "/" + item;

            // See if this is a directory
            if (fs.lstatSync(srcPath).isDirectory()) {
                // Delete the folder recursively
                deleteDirectory(srcPath);
            } else {
                // Delete the file
                fs.unlinkSync(srcPath);
            }
        });

        // Delete the directory
        fs.rmdirSync(src);
    }
};

// Log
console.log("Cleaning the files...");

// Delete the folder
deleteDirectory("./lib");

// Delete the file
fs.unlinkSync("./graph.xml");

// Create the folder
fs.mkdirSync("./lib");

// Log
console.log("Successfully cleaned the library");

// Log
console.log("Getting the graph api metadata");

// Get the metadata
https.get("https://graph.microsoft.com/v1.0/$metadata", (res) => {
    let data = "";

    // Read the data
    res.on("data", function (chunk) { data += chunk; });

    // Wait for the read to complete
    res.on("end", function () {
        // Write the file
        fs.writeFileSync("graph.xml", data);

        // Log
        console.log("Graph metadata updated.");
    });
});