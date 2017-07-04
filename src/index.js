import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import NewComponent from './new';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>App component</h1>
      </div>
    );
  }
}

const Contact = () => (
    <ul>
        <li>Ukraine</li>
        <li>Lviv region</li>
        <li>Horodok</li>
    </ul>
)

const Amm = () => (
    <div>
        <App />
    </div>
)

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path={'/'} component={ Amm } />
            <Route path={'/new'} component={ NewComponent } />
            <Route path={'/contact'} component={ Contact }/>
        </Switch>
    </HashRouter>,
    document.getElementById('app')
);
