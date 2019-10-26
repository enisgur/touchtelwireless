import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import Landing from './components/layout/Landing';
// import Brand from './Brand';
import Spinner from '../layout/Spinner';

import {
  getAllModels,
  getSelectedModel,
  deleteSelectedBrand
} from '../../actions/fix';

const Model = ({
  brand,
  getAllModels,
  getSelectedModel,
  deleteSelectedBrand,
  fix
}) => {
  useEffect(() => {
    getAllModels(brand);
  }, []);
  // console.log('selecteeedddd', fix.selectedModel);

  let onClick = e => {
    // const { name } = e.target;
    const { id } = e.target;
    // console.log(id);
    getSelectedModel(id);
  };

  let onGoBack = e => {
    // const { name } = e.target;
    const { id } = e.target;
    // console.log(id);
    deleteSelectedBrand();
  };

  return (
    <Fragment>
      <div className="fix-layout">
        <div className="fix-title">Which Model ?</div>
        <div className="fix-title-detail">
          Choose which Model <span className="imp"> {brand} </span> you have.
        </div>
        <div className="fix-items">
          {fix.selectedModels ? (
            fix.selectedModels.map(model => {
              return (
                <div
                  key={model._id}
                  onClick={e => onClick(e)}
                  className="fix-item"
                >
                  <div id={model.name} className="fix-hover"></div>
                  <img
                    // src={require('../../img/fix/apple-logo.png')}
                    // src="/img/fix/model/apple-logo.png"
                    src={model.img}
                    alt={`${model.name} brand`}
                  />
                  <span>{model.name}</span>
                </div>
              );
            })
          ) : (
            <Spinner />
          )}
        </div>
        <div className="buttons">
          <button onClick={e => onGoBack(e)} className="back">
            Go Back
          </button>
        </div>
      </div>
    </Fragment>
  );
};

Model.propTypes = {
  getAllModels: PropTypes.func.isRequired,
  getSelectedModel: PropTypes.func.isRequired,
  deleteSelectedBrand: PropTypes.func.isRequired,
  fix: PropTypes.object
};

const mapStateToProp = state => ({
  fix: state.fix
});

export default connect(
  mapStateToProp,
  { getAllModels, getSelectedModel, deleteSelectedBrand }
)(Model);
