const fs = require('fs');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);





function readData() {
    readFileAsync("userInfo.json", "utf8").then(function(rawdata) {

        const getData = JSON.parse(rawdata);

        

    });

}

module.exports = {
    read_createHTML: readData
}