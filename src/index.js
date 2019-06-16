import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Edit from './Components/Edit';
import Create from './Components/Create';
import Register from './pages/Register';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/edit/:id" component={Edit} />
      <Route path="/create" component={Create} />
      <Route path="/register" component={Register} />
    </div>
  </Router>,
  document.getElementById('root'),
);
