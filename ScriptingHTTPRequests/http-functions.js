var https = require('https');
module.exports = function getHTML(options, cb) {
  var buf = '';
  https.get(options, function(response) {
    // set encoding of received data to UTF-8
    response.setEncoding('utf8');
    // the callback is invoked when a `data` chunk is received
    response.on('data', function(data) {
      console.log('Chunk Received. Length:', data.length);
      buf += data.toString();
    });
    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      cb(buf);
      console.log('Response stream complete.');
    });
  });
};