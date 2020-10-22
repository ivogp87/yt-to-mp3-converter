import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
      </Router>
    </div>
  );
};

export default App;
