// console.log(__filename);
console.log(__dirname);

const path = require("path");
dir_name = path.dirname(__filename);
file_name = path.basename(__filename);
ext_name = path.extname(__filename);
parser = path.parse(__filename);

console.log(dir_name);
console.log(file_name);
console.log(ext_name);
console.log(parser);
