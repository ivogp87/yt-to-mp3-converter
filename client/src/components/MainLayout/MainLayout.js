import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './MainLayout.module.scss';
import ScrollToTop from '../ScrollToTop';
import Container from '../Container';
import Header from '../Header';
import Hero from '../Hero';
import Footer from '../Footer';

const MainLayout = ({ children, searchTerm, onSubmit, onChange }) => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <div className={styles.app}>
      <ScrollToTop />
      <Header
        withSearchBar={!isHome}
        searchTerm={searchTerm}
        onSubmit={onSubmit}
        onChange={onChange}
      />
      {isHome && <Hero searchTerm={searchTerm} onSubmit={onSubmit} onChange={onChange} />}
      <section className={styles.mainContent}>
        <Container>{children}</Container>
      </section>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={false}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  searchTerm: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MainLayout;
