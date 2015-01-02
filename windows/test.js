console.log('test');
var hello = require('./main');
hello.world();

var fs = require('fs-extra')

fs.copy('h:/tmp/jagoanweb', 'h:/tmp/jagoanweb2', function(err) {
  if (err) return console.error(err)
  console.log("success!")
}); //copies file