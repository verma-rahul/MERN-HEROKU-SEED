/**
 * @version 0.0.1
 * @author [Rahul Verma](https://github.com/Verma92)
 */
// Importing React's Components and React's and Node Libraries
import React, { Component } from 'react';
import { Route, Router, Switch} from 'react-router-dom';
import * as B from 'react-bootstrap';
import {createBrowserHistory} from 'history';
import Home from './home';
import OtherTab from './OtherTab';
// Constatnt Stores history of the Browser
const history = createBrowserHistory()

class App extends Component {
  constructor(props) {
    super(props);
    const HomePath="#/Home"
    if (history.location.hash.length===0)
      history.push(HomePath)

    this.state = {
      location:{pathname:history.location.hash}
    };
    this.handleSelect=this.handleSelect.bind(this)
  }
handleSelect(key) {
  this.setState({
    location:{pathname: key}
  });
  history.push(key)
}
  render() {
    return (
<Router history={ history}>
<div className="container">
      <B.Nav bsStyle="tabs"
      justified activeKey={this.state.location.pathname}
      onSelect={this.handleSelect}>
            <B.NavItem eventKey={"#/Home"}>
            Home
            </B.NavItem>
            <B.NavItem eventKey={"#/OtherTab"}>
            OtherTab
            </B.NavItem>
      </B.Nav>
     <Switch location={this.state.location}>
    <Route path="#/Home" component={Home}/>
    <Route path="#/OtherTab" component={OtherTab}/>
    </Switch>
  </div>
</Router>
    );
  }
}
export default App;
