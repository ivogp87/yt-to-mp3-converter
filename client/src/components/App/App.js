import React, { useState } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';

import '../../styles/index.scss';
import '../../helpers/iconLibrary';

import MainLayout from '../MainLayout';
import ErrorMessage from '../ErrorMessage';

import Home from '../../pages/Home';
import Search from '../../pages/Search';
import Download from '../../pages/Download';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      const encodedTerm = encodeURIComponent(searchTerm).replace(/%20/gi, '+');
      history.push(`/search?term=${encodedTerm}`);
    }
  };

  return (
    <MainLayout searchTerm={searchTerm} onSubmit={handleSubmit} onChange={handleChange}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/download/:videoId">
          <Download />
        </Route>
        <Route path="/download">
          <Redirect to="/" />
        </Route>
        <Route path="/*">
          <ErrorMessage position="center">Page not found.</ErrorMessage>
        </Route>
      </Switch>
    </MainLayout>
  );
};

export default App;
