
import utils from './utils';

import React from 'react';
import Router from 'react-router'

import BookList from './components/BookList';
import BookActions from './stores/BookStore';

let { RouteHandler ,DefaultRoute , Route, Link } = Router;

var App = React.createClass({
  render (){
    return (<div>
        Holla
        <RouteHandler {...this.props}/>
      </div>)
  }
});

var routes = (
  <Route name="main" path="/" handler={App}>
    <DefaultRoute name="list" handler={BookList}/>
  </Route>
);

Router.run(routes,(Handler) => {
  //BookActions.fetchBooks();
  React.render(<Handler/>,document.getElementById('app'));
})
