var fs = require('fs');
var https = require("https");

// Log
console.log("Removing the graph.xml file....");

// See if the file exists
if (fs.existsSync("./graph.xml")) {
    // Delete the file
    fs.unlinkSync("./graph.xml");
}

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
        console.log("Graph metadata xml file updated.");
    });
});