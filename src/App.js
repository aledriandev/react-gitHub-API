import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactBootstrap from 'react-bootstrap';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'
import { Grid, Col, Row, InputGroup, FormControl ,Dropdown, MenuItem , Tabs , Tab} from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <h2>HOME</h2>
    );
  }
}

class Battle extends Component {
  render() {
    return (
      <h2>BATTLE</h2>
    );
  }
}

class Popular extends Component {
  render() {
    return (
      <h2>POPULAR</h2>
    );
  }
}

class App extends Component {
  render() {
    return (
        <BrowserRouter>
      <div>
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Home">
            {/* <NavLink to="/home"></NavLink> */}
          </Tab>
          <Tab eventKey={2} title="Battle">

          {/* <NavLink to="/battle"></NavLink> */}
          </Tab>
          <Tab eventKey={3} title="Popular">

          {/* <NavLink to="/popular"></NavLink> */}
          </Tab>
        </Tabs>
      </div>
          <div>
            <Switch>
              <Route exact path="/"
                  render={() => <Redirect to= {'/home'}/>}/>
              <Route path="/Proyecto-Lyft"
                render={() => <Redirect to= {'/home'}/>}/>
              <Route  path="/home" render={() => <Home />}/>
              <Route  path="/battle" render={() => <Battle />}/>
              <Route  path="/popular" render={() => <Popular />}/>
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
