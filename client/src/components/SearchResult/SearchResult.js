import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './SearchResult.css';

const SearchResult = ({ id, title, thumbnail, description, channelId, channelTitle }) => {
  return (
    <Link to={`/download/${id}`} title={title} className="search-result">
      <div className="thumbnail">
        <img src={thumbnail} alt={`${title} thumbnail`} />
      </div>
      <div className="details">
        <h2>{title}</h2>
        <p className="channel-title">
          By
          <strong>{` ${channelTitle}`}</strong>
        </p>
        <p className="description">{description}</p>
      </div>
    </Link>
  );
};

SearchResult.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  channelId: PropTypes.string.isRequired,
  channelTitle: PropTypes.string.isRequired,
};

export default SearchResult;
