// const fs = require("fs");
// const path = require("path");

// function counterInitialize(fileName) {
//   const pathToFile = path.join(__dirname, fileName);
//   const viewsZero = {
//     count: 0,
//   };
//   const viewsJson = JSON.stringify(viewsZero, null, 2);
//   fs.writeFileSync(pathToFile, viewsJson);
// }

// const views = JSON.parse(fs.readFileSync(pathToFile));
// views.count += 1;

// const viewsChange = JSON.stringify(views, null, 2);

// fs.writeFileSync(pathToFile, viewsChange);

// let counterHome = counterInitialize("home.json");
// let counterAbout = counterInitialize("about.json");
// module.exports = { counterHome, counterAbout };
