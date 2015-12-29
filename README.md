# City-Weather

Check some basic weather info from some cities, provided by the Open Weather Map API!

---

## Install

``` js

npm install city-weather --save

```

---

## API

### getMaximumTemp(city, callback);

Returns the city maximum temperature of the day, in Celsius.

### getMinimumTemp(city, callback);

Returns the city minimum temperature of the day, in Celsius.

### getActualTemp(city, callback);

Returns the city actual temperature, in Celsius.

### getClimateDescription(city, callback);

Returns the city climate description of the moment.

### getWindSpeed(city, callback);

Returns the city wind speed of the moment, in m/s.

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

climate.getWindSpeed('Rio de janeiro', function(speed){
    console.log("Wind speed: " + speed);
});

```
