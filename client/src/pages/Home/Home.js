import React from 'react';
import SearchContainer from '../../components/SearchContainer';

const Home = () => {
  return (
    <main>
      <section className="bg-dark">
        <div className="container padding-2">
          <SearchContainer />
        </div>
      </section>
      <section style={{ minHeight: '500px' }}>
        <h2>Just a temporary placeholder</h2>
      </section>
    </main>
  );
};

export default Home;
