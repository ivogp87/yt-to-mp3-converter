import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../../styles/index.scss'; // GLOBAL STYLES! Normalize, additional reset, etc!
import styles from './App.module.scss';
import NavBar from '../NavBar';
import Home from '../../pages/Home';
import Search from '../../pages/Search';
import Download from '../../pages/Download';
import Footer from '../Footer';

const App = () => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <NavBar />
        <div className={styles.mainContent}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/download/:videoId" component={Download} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
