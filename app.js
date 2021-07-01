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

const fs = require("fs");
const generatePage = require("./src/page-template");

const profileDataArgs = process.argv.slice(2);
const [name, github] = profileDataArgs;

fs.writeFile("index.html", generatePage(name, github), (err) => {
  if (err) throw new Error(err);

  console.log("Portfolio complete! Check out index.html to see the output!");
});
