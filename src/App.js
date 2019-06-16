import React, { Component, Fragment } from 'react';
// import GlobalStyle from './styles/global';
// import Home from './pages/Home';
import { firebase } from './services/firebase';
import Home from './pages/Home';
import Login from './pages/Login';
import GlobalStyle from './styles/global';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  };

  render() {
    console.log('teste user => ', this.state.user);
    return (
      <Fragment>
        <GlobalStyle />
        {this.state.user ? <Home /> : <Login />}
      </Fragment>
    );
  }
}
