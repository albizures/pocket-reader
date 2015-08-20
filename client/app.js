
import utils from './utils';

import React from 'react';
import Router from 'react-router'
var { RouteHandler ,DefaultRoute , Route, Link } = Router;

var App = React.createClass({
  render (){
    return (<div>
        Holla
        <p><Link to="/">Back</Link></p>
        <p><Link to="second">Second</Link></p>
      </div>)
  }
});
var Second = React.createClass({
  render (){
    return <div>Second lala </div>
  }
})


var routes = (
  <Route name="main" path="/" handler={App}>
    <DefaultRoute name="second" handler={Second}/>
  </Route>
);

Router.run(routes,(Handler) => {
  React.render(<Handler/>,document.getElementById('app'));
})
