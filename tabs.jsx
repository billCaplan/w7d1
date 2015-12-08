var React = require('react');

var Tabs = React.createClass({

  getInitialState: function(){
    return { focused: 0 };
  },
  clicked: function(index) {
    this.setState({focused: index})
  },

  // handleChange: function(e){
  //   this.setState({ searchString: e.target.value })
  // },
  // pickArticle: function(e) {
  //   this.setState({ searchString: e.target.innerHTML})
  // },

  render: function() {

    var self = this;

    return (
        <div>
          <ul>{ this.props.items.map(function(m, index)
            var style = '',
              if(self.state.focused == index) {

              }
            )}

          </ul>
        </div>
    )
  }
})

module.exports = Tabs;
