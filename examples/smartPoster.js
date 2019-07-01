// create a NDEF message containing a URI

var ndef = require('../index'),
    message,
    byteArray,
    buffer;

records = [ 
    ndef.uriRecord("http://nodejs.org"),
    ndef.textRecord('hello, world'),
    ndef.mimeMediaRecord("application/text", "Hello", "otp"),
];

message = [
    ndef.mimeMediaRecord("application/xml", "<header></header>"),
    ndef.smartPoster(records, "poster"),
    ndef.mimeMediaRecord("application/xml", "<footer></footer>"),
];
console.log(message);
console.log(ndef.stringify(message));

byteArray = ndef.encodeMessage(message);
buffer = Buffer.from(byteArray);

console.log(buffer.toString('base64'));
