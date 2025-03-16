const path = require('path');

const fullPath = path.join('some', 'work', 'ex.txt');
console.log(fullPath);

console.log(__filename);

console.log(__dirname);

console.log(path.dirname(__filename));

console.log(path.extname(__filename));

console.log(path.basename(__filename, path.extname(__filename)));

console.log(path.parse(__dirname));

console.log(path.parse(__filename));
