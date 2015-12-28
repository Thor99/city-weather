# City-Weather

Check some basic weather info from some cities, provided by the Open Weather Map API!

---

## Install

``` js

npm install city-weather --save

```

---

## API

getMaximumTemp(city, callback);

getMinimumTemp(city, callback);

getActualTemp(city, callback);

getClimateDescription(city, callback);

---

## Usage

``` js

var climate = require('city-weather');

climate.getMaximumTemp('Rio de janeiro', function(temp){
    console.log("Maximum temperature: " + temp);
});

climate.getMinimumTemp('Rio de janeiro', function(temp){
    console.log("Minimum temperature: " + temp);
});

climate.getActualTemp('Rio de janeiro', function(temp){
    console.log("Actual temperature: " + temp);
});

climate.getClimateDescription('Rio de janeiro', function(description){
    console.log("Climate description: " + description);
});

```
