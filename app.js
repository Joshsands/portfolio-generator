// FS METHODS
// fs.close()
// fs.open()
// fs.read()
// fs.writeFile(<name of file>, <data or variable>, <callback error function>)

//HTTP MODULE
// const http = require('http');

// URL MODULE - split addresses
// const url = require('url');
// const { url } = require('inspector');
// const splitURL = url.parse(url, true);

// OUTPUT EACH COMMAND ENTRY FROM ARRAY
// const printProfileData = profileDataArr => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log('================');

//   // Is the same as this...
//   profileDataArr.forEach(profileItem => console.log(profileItem));
// };
// printProfileData(profileDataArgs);

const inquirer = require('inquirer');
// const fs = require("fs");
// const generatePage = require("./src/page-template");

// const pageHTML = generatePage(name, github)

// fs.writeFile("index.html", pageHTML, (err) => {
//   if (err) throw new Error(err);

//   console.log("Portfolio complete! Check out index.html to see the output!");
// });

inquirer
.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
  }
])
.then(answers => console.log(answers));