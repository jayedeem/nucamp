import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Directory from './DirectoryComponent';
import { CAMPSITES } from '../shared/campsites';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
    };
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/directory"
            render={() => <Directory campsites={this.state.campsites} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
