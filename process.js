const fs = require('fs');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);

function generateHTML(data) {
    return `<!DOCTYPE html>
    <html>
        <head>
            <title>Resume</title>    
        </head>
    
        <body>
            <img id="profilePic" src="${data[0].profilePic}" alt="ProfilePic">
        </body>
    </html>`;
}



function readData() {
    readFileAsync("userInfo.json", "utf8").then(function(rawdata) {

        const data = JSON.parse(rawdata);

        // generateHTML(data);

        fs.writeFile('index.html', generateHTML(data), function(err) {
            if(err) throw err;

            console.log('html file written');
        })

    });
}

module.exports = {
    readData: readData
}