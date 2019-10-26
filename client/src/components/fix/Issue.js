import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import Landing from './components/layout/Landing';
// import Brand from './Brand';
// import Model from './Model';

import { getSelectedIssue, deleteSelectedModel } from '../../actions/fix';

const Issue = ({ getSelectedIssue, deleteSelectedModel, fix }) => {
  let onClick = e => {
    // const { name } = e.target;
    const { id } = e.target;
    console.log(id);
    getSelectedIssue(id);
  };

  let onGoBack = e => {
    // const { name } = e.target;
    const { id } = e.target;
    // console.log(id);
    deleteSelectedModel();
  };
  return (
    <Fragment>
      <div className="fix-layout">
        <div className="fix-title">What is the Issue ?</div>
        <div className="fix-title-detail">What issue or issues you have ?</div>
        <div className="fix-selected">
          {fix.selectedBrand
            ? fix.selectedModel
              ? `${fix.selectedBrand} > ${fix.selectedModel}`
              : fix.selectedBrand
            : 'No Brand'}
        </div>
        <div className="fix-items lay-tree">
          <div className="fix-item" onClick={e => onClick(e)}>
            <div id="screen" className="fix-hover"></div>
            <img src="/img/fix/issue/broken-screen.png" alt="Broken Screen" />
            <span>Broken Screen</span>
          </div>
          <div className="fix-item" onClick={e => onClick(e)}>
            <div id="battery" className="fix-hover"></div>
            <img src="/img/fix/issue/battery.png" alt="Battery Issue" />
            <span>Battery</span>
          </div>
          <div className="fix-item" onClick={e => onClick(e)}>
            <div id="charging" className="fix-hover"></div>
            <img src="/img/fix/issue/charging-port.png" alt="wont charge" />
            <span>Charging Port</span>
          </div>
          <div className="fix-item" onClick={e => onClick(e)}>
            <div id="watter" className="fix-hover"></div>
            <img src="/img/fix/issue/watter-damage.png" alt="Watter Damage" />
            <span>Watter Damage</span>
          </div>
          <div className="fix-item" onClick={e => onClick(e)}>
            <div id="other" className="fix-hover"></div>
            <img src="/img/fix/issue/other.png" alt="other issue" />
            <span>Other</span>
          </div>
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

Issue.propTypes = {
  deleteSelectedModel: PropTypes.func.isRequired,
  getSelectedIssue: PropTypes.func.isRequired,
  fix: PropTypes.object.isRequired
};

const mapStateToProp = state => ({
  fix: state.fix
});

export default connect(
  mapStateToProp,
  { getSelectedIssue, deleteSelectedModel }
)(Issue);
