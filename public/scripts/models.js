// using http://openweathermap.org/weather-data#current
var Weather = Backbone.Model.extend();
// we're going to use open weather
// create a new instane of Weather
var forecast = new Weather();
// show empty attributes
console.log(forecast.attributes);
// set url to get data from
forecast.url = "http://api.openweathermap.org/data/2.5/find?q=Chicago&units=imperial";
// fetch data from API
forecast.fetch();
// console log out new attributes
console.log(forecast.attributes);
// we're going to use a model's getter to get a value from the attributes
var data = forecast.get("list");
// log out data
console.log(data[0].main);
// put some data together
var weatherData = {
  location: data[0].name,
  humidity: data[0].main.humidity,
  temp: data[0].main.temp
};
// cool, let's make a template
// ah, see where I'm going with this?
// an underscore template
var template = _.template("It is <%= temp %> degrees Farenheight in <%= location %> with <%= humidity %> percent humidity.");
// now render it all together
template(weatherData);
// now, let's add this to the DOM, shall we?
$('body').html(template(weatherData));
