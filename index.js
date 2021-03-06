const request = require('request');

const APP_ID = '59f807307ebf813df0c1dd3647242945';
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?q=';

const getRequestOptions = city => ({
  url: `${BASE_URL}${city}&APPID=${APP_ID}`,
  headers: {
    'User-Agent': 'agentWeatherrApi'
  }
});

// Get maximum temperature
exports.getMaximumTemp = (city, callback) => {
  const options = getRequestOptions(city.trim());

  request(options, (error, response, body) => {
    let data = JSON.parse(body);

    if(data['message'] != undefined) {
      return callback('City not found');
    } else {
      return callback(null, parseInt(data['main']['temp_max'] - 273));
    }
  });
};

// Get minimum temperature
exports.getMinimumTemp = (city, callback) => {
  const options = getRequestOptions(city.trim());

  request(options, (error, response, body) => {
    let data = JSON.parse(body);

    if(data['message'] != undefined) {
       return callback('City not found');
    } else {
      return callback(null, parseInt(data['main']['temp_min'] - 273));
    }
  });
};

// Get actual temperature
exports.getActualTemp = (city, callback) => {
  const options = getRequestOptions(city.trim());

  request(options, (error, response, body) => {
    let data = JSON.parse(body);

    if(data['message'] != undefined) {
      return callback('City not found');
    } else {
      return callback(null, parseInt(data['main']['temp'] - 273));
    }
  });
};

// Get climate description
exports.getClimateDescription = (city, callback) => {
  const options = getRequestOptions(city.trim());

  request(options, (error, response, body) => {
    let data = JSON.parse(body);

    if(data['message'] != undefined) {
      return callback('City not found');
    } else {
      return callback(null, data['weather'][0]['description']);
    }
  });
};

// Get wind speed
exports.getWindSpeed = (city, callback) => {
  const options = getRequestOptions(city.trim());

  request(options, (error, response, body) => {
    let data = JSON.parse(body);

    if(data['message'] != undefined) {
      return callback('City not found');
    } else {
      return callback(null, data['wind']['speed']);
    }
  });
};
