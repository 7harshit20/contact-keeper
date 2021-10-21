import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    <Route>
      <Fragment>
        <Navbar />

      </Fragment>
    </Route>
  );
}

export default App;
