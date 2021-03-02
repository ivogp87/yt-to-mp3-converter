import React, { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import '../../styles/index.scss';
import '../../helpers/iconLibrary';

import MainLayout from '../MainLayout';

import Home from '../../pages/Home';
import Search from '../../pages/Search';
import Download from '../../pages/Download';
import Error404 from '../../pages/Error404';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    setSearchTerm(e.target.value.trim());
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
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/download/:videoId" component={Download} />
        <Route path="/*" component={Error404} />
      </Switch>
    </MainLayout>
  );
};

export default App;
