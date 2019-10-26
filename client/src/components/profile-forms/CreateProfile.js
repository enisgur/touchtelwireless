import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    bio: '',
    phone: '',
    address: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    instagram: ''
  });

  const {
    bio,
    phone,
    address,
    twitter,
    facebook,
    linkedin,
    instagram
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <Fragment>
      <div className="registerPage">
        <div className="forms">
          <div className="formsHeader">
            <span className="icons clearfix">
              <i className="fas fa-user" />
              <h1>Create Profile</h1>
            </span>
          </div>

          <form className="form" onSubmit={e => onSubmit(e)}>
            <div className="form-group">
              <textarea
                placeholder="A short bio of yourself"
                name="bio"
                value={bio}
                onChange={e => onChange(e)}
              />
              <small>Tell us a little about yourself.</small>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="phone number"
                name="phone"
                value={phone}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="address"
                name="address"
                value={address}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="twitter"
                name="twitter"
                value={twitter}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="facebook"
                name="facebook"
                value={facebook}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="linkedin"
                name="linkedin"
                value={linkedin}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="instagram"
                name="instagram"
                value={instagram}
                onChange={e => onChange(e)}
              />
            </div>

            <input type="submit" value="Save and Go Back" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired
};

export default connect(
  null,
  { createProfile }
)(withRouter(CreateProfile));
