const request = require('request');
const fs = require('fs')
request('http://www.example.edu', (error, response, body) => {
  const path = './test.txt';
  // fs.access(path, fs.F_OK , (err) => {
    
  // })

  fs.writeFile(path, body, {flag: 'a+'}, err => {
    if (err) {
      console.error(err)
      return
    }
  })
});

