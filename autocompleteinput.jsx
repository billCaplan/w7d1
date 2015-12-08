var React = require('react');

var AutoCompleteInput = React.createClass({

  getInitialState: function(){
    return { searchString: '' };
  },
  handleChange: function(e){
    this.setState({ searchString: e.target.value })
  },
  searchFill: function(e) {
    this.setState({ searchString: e.target.innerHTML})
  },

  render: function() {
    var self = this
    var lib = self.props.names;
    var searchString = self.state.searchString.trim().toLowerCase();

    if (searchString.length > 0) {
      lib = lib.filter(function(l) {
        return l.toLowerCase().match( searchString );
      });
    }

    return (
      <div>
        <input
          type="text"
          value={self.state.searchString}
          onChange={self.handleChange} placeholder="Type Here" />
        <ul>
          {
            lib.map(function(l) {
              return <li onClick={self.searchFill} key={l}>{l}</li>
            })
          }
        </ul>
      </div>
    );
  }
})

module.exports = AutoCompleteInput;
