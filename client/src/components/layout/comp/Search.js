import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
// import { Link, Redirect } from 'react-router-dom';
// import { login } from '../../actions/auth';
import PropTypes from 'prop-types';

import {
  searchProducts,
  clearProducts,
  searching
} from '../../../actions/products';

const Search = ({ searchProducts, clearProducts, searching }) => {
  const [formData, setFormData] = useState({
    search: ''
  });

  const { search } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    // clearProducts();
    searching();
    searchProducts(search);
  };

  return (
    <Fragment>
      <div className="search">
        <form onSubmit={e => onSubmit(e)}>
          <input
            type="text"
            placeholder="&#128270; Search.."
            name="search"
            value={search}
            onChange={e => onChange(e)}
          />
        </form>
      </div>
    </Fragment>
  );
};

Search.propTypes = {
  searchProducts: PropTypes.func.isRequired,
  clearProducts: PropTypes.func.isRequired,
  searching: PropTypes.func.isRequired
};

export default connect(
  null,
  { searchProducts, clearProducts, searching }
)(Search);
