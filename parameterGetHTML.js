var https = require('https');

function getAndPrintHTML(options) {
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
      console.log(buf);
      console.log('Response stream complete.');
    });
  });
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
getAndPrintHTML(requestOptions);