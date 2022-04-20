//take in 2 command line arguments
//URL and local file path
//ex: node fetcher https://example.edu/ ./index.html
//download resource at the URL to local path on machine
//when completed, print:
//Downloaded and save ___ bytes to ./index.html
//make http request and wait for response
//after request is complete, take data received and write it to a file in local system
//avoid writefilesync
// Install and use the request library to make the HTTP request (We know this library is deprecated but it is still ok to use for our purposes.)
// Use Node's fs (file system) module to write the file
// Use the callback based approach we've been learning so far
// Do not use the pipe function
// Do not use synchronous functions

const fs = require('fs');
const request = require('request');

//command line arguments
let url = process.argv[2];
let path = process.argv[3];

//request
request(url, (error, response, body) => {
  if (error) {
    console.log('error', error);
  }
  fs.writeFile(path, body,(error) => {
    if (error) {
      console.log('error', error);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
  });
});
