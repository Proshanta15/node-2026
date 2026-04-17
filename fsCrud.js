const fs = require("fs");

// fs.writeFileSync("text/banana.txt", "Banana is a fruit");

// const data = fs.readFileSync("text/apple.txt", "utf-8");
// console.log(data);

// fs.appendFileSync("text/apple.txt", "\nApple is red in color");

// fs.unlinkSync("text/banana.txt");

// console.log(process.argv);

const operation = process.argv[2];
const fileName = process.argv[3];
const content = process.argv[4];

if (operation === "create") {
  const filePath = `text/${fileName}.txt`;
  fs.writeFileSync(filePath, content);
  console.log(`File ${fileName}.txt created successfully.`);
} else if (operation === "read") {
  const filePath = `text/${fileName}.txt`;
  const data = fs.readFileSync(filePath, "utf-8");
  console.log(data);
} else if (operation === "update") {
  const filePath = `text/${fileName}.txt`;
  fs.appendFileSync(filePath, `\n${content}`);
  console.log(`File ${fileName}.txt updated successfully.`);
} else if (operation === "delete") {
  const filePath = `text/${fileName}.txt`;
  fs.unlinkSync(filePath);
  console.log(`File ${fileName}.txt deleted successfully.`);
} else {
  console.log("Your Input is not correct, Plz input a valid operation.");
}
