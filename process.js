const fs = require('fs');

function read_createHTML() {
    fs.readFile('userInfo.json', 'utf8', (err, data) => {
        if(err) throw err;

        var getData = JSON.parse(data);

        console.log(getData);

    })
}

module.exports = {
    read_createHTML: read_createHTML
}