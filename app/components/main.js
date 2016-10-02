// Include React
var React = require('react');

// Include Sub-Components
var saved = require('./children/saved');
var search = require('./children/search');

// Helper Function
var helpers = require('./utils/helpers.js');

// Main Component
var main = React.createClass({
  render: function(){
    return(
      {/*Rendering only one main div*/}
      <div className="main-container">
        <div className="container">
          {/*Navbar*/}
          <nav className="navbar navbar-default" role="navigation">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">NYT-React</a>
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="#/search">Search</a></li>
                  <li><a href="#/saved">Saved Articles</a></li>
                </ul>
              </div>
            </div>
          </nav>

          {/*Jumbotron*/}
          <div className="jumbotron">
            <h2 className="text-center"><strong>(ReactJS) New York Times Article Scrubber</strong></h2>
            <h3 className="text-center">Search for and save articles of interest.</h3>
          </div>
          {/*Here we will load the sub components (Search or Saved */}
          {/*These sub-components are getting passed as this.props.children*/}
          {this.props.children}

          <footer>
            <hr />
            <p className="pull-right"><i className="fa fa-github" aria-hidden="true"></i> Proudly built using React.js</p>
          </footer>
        </div>
      </div>
    )
  }
});

// Export the module back to the route
module.exports = main;
  
})