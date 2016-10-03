// Inclue the React library
var React = require('react');

// Include the Router
var Router = require('react-router');
var Route = Router.Route;

//  Include the IndexRoute (catch-all route)
var IndexRoute  = Router.IndexRoute;

// Reference the high-level components
var Main = require('../components/main');
var Saved = require('../components/children/saved'); 
var Search = require('../components/children/search'); 

// Export the Routes
module.exports = (

  /*High level component is the Main component*/
  <Route path='/' component={Main}>

    {/* If user selects Search then show the appropriate component*/}
    <Route path='Search' component={Search} />

    {/* If user selects Child2 then show the appropriate component*/}
    <Route path='Saved' component={Saved} />

    {/*If user selects any other path... we get the Home Route*/}
    <IndexRoute component={Search} />
    
  </Route>


);