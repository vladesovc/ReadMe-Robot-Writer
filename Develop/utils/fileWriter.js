const fs = require('fs');

const writeFile = (filename, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, content, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve('Success!');
      }
    });
  });
};

module.exports = writeFile;