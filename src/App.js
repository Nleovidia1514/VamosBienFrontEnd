import React, {Component} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import './App.css';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';

class App extends Component{
  
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/home" exact component={Home}/>
            <Redirect from="/" to="/home" exact />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
