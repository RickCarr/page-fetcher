const request = require('request');
const fs = require('fs');

const localFilePath = process.argv[3];
const content = process.argv[2];

request(content, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
  fs.writeFile(localFilePath, content, err => {
    if (err) {
      console.log('all your error are belong to us', err);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${content}`);
  });

});
