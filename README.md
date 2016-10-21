# City Weather

Get weather information for specific cities, provided by Open Weather Map's API.


## Install

``` js

npm install city-weather --save

```


## API

### getMaximumTemp(city, callback);

Returns the maximum temperature of the day for that city, in Celsius.

### getMinimumTemp(city, callback);

Returns the minimum temperature of the day for that city, in Celsius.

### getActualTemp(city, callback);

Returns the actual temperature in that city, in Celsius.

### getClimateDescription(city, callback);

Returns the current climate description for that city.

### getWindSpeed(city, callback);

Returns the current wind speed at that city, in m/s.


## Usage

``` js

const climate = require('city-weather');

climate.getMaximumTemp('Rio de janeiro', (temp) => {
  console.log(`Maximum temperature: ${temp}`);
});

climate.getMinimumTemp('Rio de janeiro', (temp) => {
  console.log(`Minimum temperature: ${temp}`);
});

climate.getActualTemp('Rio de janeiro', (temp) => {
  console.log(`Actual temperature: ${temp}`);
});

climate.getClimateDescription('Rio de janeiro', (description) => {
  console.log(`Climate description: ${description}`);
});

climate.getWindSpeed('Rio de janeiro', (speed) => {
  console.log(`Wind speed: ${speed}`);
});

```