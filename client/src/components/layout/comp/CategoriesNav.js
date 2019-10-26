import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { searchCategory, searching } from '../../../actions/products';

const CategoriesNav = ({ searching, searchCategory }) => {
  const onClick = e => {
    searching();
    searchCategory(e.target.name);
  };
  return (
    <div className="body-nav">
      <ul>
        <li>
          <button name="Accessories" onClick={e => onClick(e)}>
            Accessories
          </button>
        </li>
        <li>
          <button name="Landyards" onClick={e => onClick(e)}>
            Landyards
          </button>
        </li>
        <li>
          <button name="Bluetooth-Speakers" onClick={e => onClick(e)}>
            Bluetooth Speakers
          </button>
        </li>
        <li>
          <button name="Headphones" onClick={e => onClick(e)}>
            Headphones
          </button>
        </li>
      </ul>
    </div>
  );
};

CategoriesNav.propTypes = {
  searchCategory: PropTypes.func.isRequired,
  searching: PropTypes.func.isRequired
};

export default connect(
  null,
  { searchCategory, searching }
)(CategoriesNav);
