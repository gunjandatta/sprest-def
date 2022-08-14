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

// See if the file exists
if (fs.existsSync("./graph.xml")) {
    // Delete the file
    fs.unlinkSync("./graph.xml");
}

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
        // Fix TypeScript Issues
        // Rename the "case" type 
        // Rename the "return" type
        let content = data.toString()
            .replace('<EntityType Name="case"', '<EntityType Name="_case"')
            .replace('<Action Name="delete"', '<Action Name="_delete"')
            .replace('<Action Name="false"', '<Action Name="_false"')
            .replace('<Action Name="if"', '<Action Name="_if"')
            .replace('<Action Name="import"', '<Action Name="_import"')
            .replace('<Action Name="return"', '<Action Name="_return"')
            .replace('<Action Name="true"', '<Action Name="_true"');

        // Write the file
        fs.writeFileSync("graph.xml", content);

        // Log
        console.log("Graph metadata updated.");
    });
});