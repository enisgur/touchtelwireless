import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';

import {
  getAllProducts,
  categoryPaginating,
  searching
} from '../../../actions/products';

const ProductsListing = ({
  getAllProducts,
  products,
  categoryPaginating,
  searching
}) => {
  useEffect(() => {
    getAllProducts();
  }, []);

  let onClick = e => {
    const { name } = e.target;
    const lastSearch = products.products.lastSearch;
    console.log(lastSearch, name);
    searching();
    categoryPaginating(lastSearch, name);
  };

  // @TODO delete this console.log here bellow
  // console.log(products);

  const pageNumbers = [];
  if (products.products) {
    if (products.products.pages) {
      for (let i = 1; i <= products.products.pages; i++) {
        pageNumbers.push(i);
      }
    }
  }

  return products.loading && products.products === null ? (
    <Spinner />
  ) : !products.loading && products.products === null ? (
    <div>No Product found</div>
  ) : (
    <Fragment>
      <div className="items">
        {products.products.docs.map(pro => {
          return (
            <div key={pro._id} className="item">
              <div className="itemPic">
                <img src={pro.image} alt="itemPic" />
              </div>
              <div className="itemDetails">
                <h3>{pro.brand}</h3>
                <h6>{pro.product}</h6>
                <p>{pro.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      {pageNumbers ? (
        <div className="pagination">
          <ul>
            {pageNumbers.map(number =>
              number === products.products.page ? (
                <li key={number} className="page-item">
                  <button
                    name={number}
                    className="currentPage"
                    onClick={e => onClick(e)}
                  >
                    {number}
                  </button>
                </li>
              ) : (
                <li key={number} className="page-item">
                  <button
                    name={number}
                    className="otherPages"
                    onClick={e => onClick(e)}
                  >
                    {number}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      ) : null}
    </Fragment>
  );
};

ProductsListing.propTypes = {
  getAllProducts: PropTypes.func.isRequired,
  categoryPaginating: PropTypes.func.isRequired,
  searching: PropTypes.func.isRequired,
  products: PropTypes.object
};

const mapStateToProps = state => ({
  products: state.products
});

export default connect(
  mapStateToProps,
  { getAllProducts, categoryPaginating, searching }
)(ProductsListing);
