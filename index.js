const inquirer = require('inquirer');
const fs = require('fs');
const axios = require('axios');
const process = require('./process');


const questions = [
    {
        type: 'message',
        message: 'Input your GitHub username: ',
        name: 'username'
    },
    {
        type: 'list',
        name: 'color',
        message: 'Choose a color scheme for the resume: ',
        choices: [
            'green',
            'blue',
            'pink',
            'red'
        ]
    }
]

inquirer.prompt(questions).then(data => {

    const queryURL = `https://api.github.com/users/${data.username}`;

    axios.get(queryURL).then(function(response) {
        const userInfo = {
            bio: response.data.bio,
            username: response.data.login,
            location: response.data.location,
            profilePic: response.data.avatar_url,
            profileURL: response.data.html_url,
            numRepos: response.data.public_repos,
            followers: response.data.followers,
            following: response.data.following
        }


        fs.writeFile('userInfo.json', "[ \n" + JSON.stringify(userInfo, null, '\t') + ", \n" + JSON.stringify(data, null, '\t') + "\n]", function(err) {
            if (err) throw err;
            console.log('success! created color user info file!');
        });
    });
    process.read_createHTML(); 
});