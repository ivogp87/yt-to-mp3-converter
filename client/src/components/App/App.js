import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../Navbar';
import Home from '../../pages/Home';
import Search from '../../pages/Search';
import Download from '../../pages/Download';
import Footer from '../Footer';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/download/:videoId" component={Download} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
