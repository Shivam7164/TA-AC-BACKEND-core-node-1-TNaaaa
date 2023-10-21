let url = require('url')
let parsedUrl = url.parse('https://airindia.com/fares/calculate?from=delhi&to=detroitand')
console.log(parsedUrl);
console.log(parsedUrl.query);
console.log(parsedUrl.pathname);
console.log(parsedUrl.protocol);
