var React = require('react');
var ReactDOM = require('react-dom');
var AutoCompleteInput = require('./autocompleteinput.jsx');
var WeatherClock = require('./weatherclock.jsx');

var listOfNames = ["tim", "doug", "sam", "frank","samuel","doug funny"];


// document.addEventListener("DOMContentLoaded", function () {
//   ReactDOM.render(<AutoCompleteInput names={listOfNames} />, document.getElementById('root'));
// });
document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<WeatherClock />, document.getElementById('root'));
});
