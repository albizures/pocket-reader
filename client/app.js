
import React from 'react';
import { Router, Route, Link } from 'react-router';
import { history } from 'react-router/lib/History';

var App = React.createClass({
  render(){
    return (
      <div className="detail">
        {this.props.children}
      </div>
    );
  }
});
var About = React.createClass({
  render(){
    return <div>pureba</div>
  }
});
var Users = React.createClass({
  componentDidMount() {
    this.setState({
      // route components are rendered with useful information, like URL params
      users: [{id:1, name : 'aaa'}] 
    });
  },
  render() {
    return (
      <div>
        <h1>Users</h1>
        <div className="master">
          <ul>
            {/* use Link to route around the app */}
            {this.state.users.map(user => (
              <li><Link to={`/users/${users.id}`}>{user.name}</Link></li>
            ))}
          </ul>
        </div>
        <div className="detail">
          {this.props.children}
        </div>
      </div>
    );
  }
});

var User = React.createClass({
  componentDidMount() {
    this.setState({
      // route components are rendered with useful information, like URL params
      user: findUserById(this.props.params.userId)
    });
  },

  render() {
    return (
      <div>
        <h2>{this.state.user.name}</h2>
        {/* etc. */}
      </div>
    );
  }
});


React.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <Route path="users" component={Users}>
        <Route path="/user/:userId" component={User}/>
      </Route>
    </Route>
  </Router>
), document.body);
