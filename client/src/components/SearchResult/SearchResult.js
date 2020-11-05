import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { formatDate, decodeHtmlEntities } from '../../helpers';
import './SearchResult.css';

const SearchResult = ({ id, title, thumbnail, description, channelTitle, publishedAt }) => {
  return (
    <Link to={`/download/${id}`} title={title} className="search-result">
      <div className="thumbnail">
        <img src={thumbnail} alt={`${title} thumbnail`} />
      </div>
      <div className="details">
        <h2>{decodeHtmlEntities(title)}</h2>
        <div className="row nowrap">
          <p className="channel-title">
            <strong>{` ${channelTitle}`}</strong>
          </p>
          <span>{formatDate(new Date(publishedAt))}</span>
        </div>
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
  channelTitle: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
};

export default SearchResult;
