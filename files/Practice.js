// const http = require("http");
// const user_data = require("./data");

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "applicationjson" });
//     res.write(user_data);
//     res.end();
//   })
//   .listen(4500);

// const fs = require("fs");
// const input = process.argv;
// console.log(input);

// if (input[2] === "add") {
//   fs.writeFileSync(input[3], input[3]);
// } else if (input[2] === "remove") {
//   fs.unlinkSync(input[3]);
// } else {
//   console.log("invalid input");
// }

// const fs = require("fs");
// const path = require("path");
// const dirPath = path.join(__dirname, "files");
// // for (let index = 0; index < 6; index++) {
// //   fs.writeFileSync(`${dirPath}/New File ${index + 1}.txt`, "Hello World");
// // }
// fs.readdir(dirPath, (error, files) => {
//   console.log(files);
// });

// const fs = require("fs");
// const path = require("path");
// const dirPath = path.join(__dirname, "curd");
// console.log(dirPath);

// fs.writeFileSync(`${dirPath}/Order.pdf`, "Hello world");

// fs.readFile(`${dirPath}/Order.pdf`, "utf8", (err, item) => {
//   console.log(item);
// });

//Update File

// fs.appendFileSync(
//   `${dirPath}/Order.pdf`,
//   " My name is Mudassir Ahmed",
//   (err, item) => {
//     if (!err) console.log("updated");
//   }
// );

// Rename File

// fs.renameSync(`${dirPath}/Order.pdf`, `${dirPath}/Notes.pdf`, (err, itm) => {
//   if (!err) console.log("Rename File");
// });

// fs.unlinkSync(`${dirPath}/Notes.pdf`);

// app.get("/home", (req, res) => {
//     res.sendFile(`${filesPath}/home.html`);
//   });

//   // Import Express

// const express = require("express");
// const path = require("path");
// const filesPath = path.join(__dirname, "files");
// const app = express();

// // make home page

// app.get("/home", (req, res) => {
//   res.sendFile(`${filesPath}/home.html`);
// });

// // creating 404 page
// app.get("*", (req, res) => {
//   res.sendFile(`${filesPath}/404.html`);
// });

// app.listen(5000);
