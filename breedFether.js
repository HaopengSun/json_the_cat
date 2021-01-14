const request = require('request');
const search = 'https://api.thecatapi.com/v1/breeds/search?q=' + process.argv.slice(2);

request(search, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);

  const data = JSON.parse(body);
  if (data.length !== 0){
    console.log(data)
    console.log(typeof data);
  } else {
    console.log('breed not found!')
  }
  
});
