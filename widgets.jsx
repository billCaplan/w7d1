var React = require('react');
var ReactDOM = require('react-dom');
var AutoCompleteInput = require('./autocompleteinput.jsx');
var WeatherClock = require('./weatherclock.jsx');
var Tabs = require('./tabs.jsx');

var listOfNames = ["tim", "doug", "sam", "frank","samuel","doug funny"];

var MyComponent = React.createClass({
  render: function () {
    return(
      <div>
        <AutoCompleteInput names={listOfNames} />
        <WeatherClock />
        <Tabs names={listOfNames} />
      </div>
    )
  }
});


// document.addEventListener("DOMContentLoaded", function () {
//   ReactDOM.render(<AutoCompleteInput names={listOfNames} />, document.getElementById('root'));
// });
// document.addEventListener("DOMContentLoaded", function () {
//   ReactDOM.render(<WeatherClock />, document.getElementById('root'));
// });
// document.addEventListener("DOMContentLoaded", function () {
//   ReactDOM.render(<Tabs />, document.getElementById('root'));
// });
document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<MyComponent />, document.getElementById('root'));
});
