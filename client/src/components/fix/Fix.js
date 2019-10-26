import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import Landing from './components/layout/Landing';
import Brand from './Brand';
import Model from './Model';
import Issue from './Issue';
import Booking from './Booking';

import { getAllBrand } from '../../actions/fix';

const Fix = ({ getAllBrand, fix }) => {
  useEffect(() => {
    getAllBrand();
  }, []);
  const testPage = () => {
    if (fix.booked) {
      if (fix.booked.ok) {
        return <div className="success">perfecto</div>;
      }
    }

    // console.log(fix.fix.brand);
    if (fix.selectedBrand) {
      if (fix.selectedModel) {
        if (fix.selectedIssue) {
          return <Booking />;
        }
        return <Issue />;
      }
      return <Model brand={fix.selectedBrand} />;
    } else {
      return <Brand />;
    }
  };

  return <Fragment>{testPage()}</Fragment>;
};

Fix.propTypes = {
  getAllBrand: PropTypes.func.isRequired,
  fix: PropTypes.object
};

const mapStateToProp = state => ({
  fix: state.fix
});

export default connect(
  mapStateToProp,
  { getAllBrand }
)(Fix);
