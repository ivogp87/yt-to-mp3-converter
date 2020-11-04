import React from 'react';
import SearchContainer from '../../components/SearchContainer';
import PopularVideos from '../../components/PopularVideos';

const Home = () => {
  return (
    <main>
      <section className="bg-dark">
        <div className="container padding-2">
          <SearchContainer />
        </div>
      </section>
      <section className="container padding-2">
        <h2>Popular Music Videos</h2>
        <PopularVideos />
      </section>
    </main>
  );
};

export default Home;
