var request = require('request');

function getWordWithoutSomething(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

exports.getMaximumTemp = function(city, callback){
  city = getWordWithoutSomething(city.trim(), ' ', '-');

  var options = {
      url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=59f807307ebf813df0c1dd3647242945',
      headers: {
          'User-Agent': 'agentWeatherrApi'
      }
  }

  request(options, function(error, response, body){
      var resp = JSON.parse(body);
      if(resp['message'] != undefined){
          finalData = "City was not found";
          return callback(finalData);
      } else{
          finalData = parseInt(resp['main']['temp_max'] - 273);
          return callback(finalData);
      }
  });
};

exports.getMinimumTemp = function(city, callback){
  city = getWordWithoutSomething(city.trim(), ' ', '-');

  var options = {
      url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=59f807307ebf813df0c1dd3647242945',
      headers: {
          'User-Agent': 'agentWeatherrApi'
      }
  }

  request(options, function(error, response, body){
      var resp = JSON.parse(body);
      if(resp['message'] != undefined){
          finalData = "City was not found";
          return callback(finalData);
      } else{
          finalData = parseInt(resp['main']['temp_min'] - 273);
          return callback(finalData);
      }
  });
};

exports.getActualTemp = function(city, callback){
  city = getWordWithoutSomething(city.trim(), ' ', '-');

  var options = {
      url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=59f807307ebf813df0c1dd3647242945',
      headers: {
          'User-Agent': 'agentWeatherrApi'
      }
  }

  request(options, function(error, response, body){
      var resp = JSON.parse(body);
      if(resp['message'] != undefined){
          finalData = "City was not found";
          return callback(finalData);
      } else{
          finalData = parseInt(resp['main']['temp'] - 273);
          return callback(finalData);
      }
  });
};

exports.getClimateDescription = function(city, callback){
  city = getWordWithoutSomething(city.trim(), ' ', '-');

  var options = {
      url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=59f807307ebf813df0c1dd3647242945',
      headers: {
          'User-Agent': 'agentWeatherrApi'
      }
  }

  request(options, function(error, response, body){
      var resp = JSON.parse(body);
      if(resp['message'] != undefined){
          finalData = "City was not found";
          return callback(finalData);
      } else{
          finalData = resp['weather'][0]['description'];
          return callback(finalData);
      }
  });
};

exports.getWindSpeed = function(city, callback){
  city = getWordWithoutSomething(city.trim(), ' ', '-');

  var options = {
      url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=59f807307ebf813df0c1dd3647242945',
      headers: {
          'User-Agent': 'agentWeatherrApi'
      }
  }

  request(options, function(error, response, body){
      var resp = JSON.parse(body);
      if(resp['message'] != undefined){
          finalData = "City was not found";
          return callback(finalData);
      } else{
          finalData = resp['wind']['speed'];
          return callback(finalData);
      }
  });
};
