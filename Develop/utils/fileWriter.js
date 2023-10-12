const fs = require('fs');
const util = require('util');
const createFile = util.promisify(fs.writeFile)

const writeFile = (filename, content) => {
    return createFile(filename, content);
};
// this returns the fs writefile function as a promise - simplified 

module.exports = writeFile;