// extract a fancy well-formatted emoji file from http://unicode.org/emoji/charts/emoji-ordering.txt
// (c) 2017 Micha Hanselmann

let http = require("http");
let fs = require("fs");

// retrieve data
let options = {
  host: "unicode.org",
  port: 80,
  path: "/emoji/charts/emoji-ordering.txt"
}
http.get(options, (response) => {
    let data = "";
    response.on("data", (chunk) => data += chunk);
    response.on("end", () => extract(data));
});

// extract, parse and save result
let extract = (data) => {
  let regex = /U\+[0-9A-F]+/g;
  let matches;
  let emojis = [];

  while (matches = regex.exec(data)) {
    let emoji = matches[0].replace("U+", "&#x"); // format for HTML use
    if (!emojis.includes(emoji)) emojis.push(emoji);
  }
  console.log("Retrieved " + emojis.length + " incredible emojis.");

  fs.writeFile("emojis.txt", JSON.stringify(emojis), (err) => {
    if (err) return console.log(err);
    console.log("All right!");
  });
}
