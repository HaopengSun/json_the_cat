const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const search = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(search, (error, response, body) => {
    if (error){
      callback(error, null);
      console.log('error:', error);
      return;
    }

    if (response.statusCode !== 200){
      console.log('statusCode:', response && response.statusCode);
      return;
    }
    
    const desc = JSON.parse(body);
    if (desc[0].description.length !== 0){
      callback(null, desc[0].description);
    } else {
      console.log('breed not found!')
    }
  });
};

module.exports = { fetchBreedDescription };