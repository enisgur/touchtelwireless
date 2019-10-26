import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';

import { getSelectedBrand } from '../../actions/fix';

const Brand = ({ getSelectedBrand, fix }) => {
  let onClick = e => {
    // const { name } = e.target;
    const { id } = e.target;
    console.log(id);
    getSelectedBrand(id);
  };

  return (
    <Fragment>
      <div className="fix-layout">
        <div className="fix-title">Which Brand ?</div>
        <div className="fix-title-detail">
          Choose which brand device you have.
        </div>
        <div className="fix-items">
          {fix.brands ? (
            fix.brands.map(brands => {
              return (
                <div
                  key={brands._id}
                  onClick={e => onClick(e)}
                  className="fix-item"
                >
                  <div id={brands.brand} className="fix-hover"></div>
                  <img
                    // src={require('../../img/fix/apple-logo.png')}
                    // src="/img/fix/brands/apple-logo.png"
                    src={brands.img}
                    alt={`${brands.brand} brand`}
                  />
                  <span>{brands.brand}</span>
                </div>
              );
            })
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </Fragment>
  );
};

Brand.propTypes = {
  getSelectedBrand: PropTypes.func.isRequired,
  fix: PropTypes.object
};

const mapStateToProp = state => ({
  fix: state.fix
});

export default connect(
  mapStateToProp,
  { getSelectedBrand }
)(Brand);
