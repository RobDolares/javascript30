import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import BaseLayout from './BaseLayout';
import Home from './Home';
import Challenges from './Challenges';

class App extends React.Component {

  render() {
    return (
      <Router>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/challenges" component={Challenges}/>
          </Switch>
        </BaseLayout>
      </Router>
    )
  };
}

export default App;
