var React = require('react');

var WeatherClock = React.createClass({

  showPosition: function(position){
    // get position before getting weather
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    }, this.getWeather);

  },

  getInitialState: function(){
    return { currentTime: new Date(), geoLoc: navigator.geolocation.getCurrentPosition(this.showPosition) };
  },
  componentDidMount: function (){
    return setInterval(this.tick, 1000);
  },
  tick: function(){
    this.setState({ currentTime: new Date(this.state.currentTime.getTime() + 1000)});
  },
  getWeather: function() {
    // build url then request.
    var that = this;
    var url = "http://api.openweathermap.org/data/2.5/weather?lat="+
              Math.round(this.state.latitude * 100)/100 +
              "&lon=" +
              Math.round(this.state.longitude * 100)/100 +
              "&appid=645c5d39c7603f17e23fcaffcea1a3c1"

    var xmlhttp = new XMLHttpRequest();


    xmlhttp.onreadystatechange = function() {
       if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
          if(xmlhttp.status == 200){
            that.setState({
              weather: this.response
            })
          }
          else {
            //failure
              alert('something else other than 200 was returned')
          }
       }
   };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  },




  render: function() {
    var self = this;
    return (
      <div>
        <p>{self.state.currentTime.toUTCString()}</p>
        <p>{self.state.longitude}</p>
        <p>{self.state.latitude}</p>
        <p>{self.state.weather}</p>
      </div>
    )
  }
});

module.exports = WeatherClock;
