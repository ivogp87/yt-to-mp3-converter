import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './SearchBar.module.scss';
import IconButton from '../IconButton';

const SearchBar = ({ searchTerm, onChange, onSubmit, className }) => {
  return (
    <form className={classNames(styles.searchBar, className)} onSubmit={onSubmit}>
      <input
        className={styles.searchInput}
        onChange={onChange}
        type="text"
        value={searchTerm}
        placeholder="Search"
        required
      />
      <IconButton type="submit" icon="search" color="secondary" />
    </form>
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
};

SearchBar.defaultProps = {
  className: '',
};

export default SearchBar;
