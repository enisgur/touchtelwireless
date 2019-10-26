import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history
}) => {
  const [formData, setFormData] = useState({
    bio: '',
    phone: '',
    address: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    instagram: ''
  });

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      bio: loading || !profile.bio ? '' : profile.bio,
      phone: loading || !profile.contact.phone ? '' : profile.contact.phone,
      address:
        loading || !profile.contact.address ? '' : profile.contact.address,
      twitter: loading || !profile.twitter ? '' : profile.twitter,
      facebook: loading || !profile.facebook ? '' : profile.facebook,
      linkedin: loading || !profile.linkedin ? '' : profile.linkedin,
      instagram: loading || !profile.instagram ? '' : profile.instagram
    });
  }, [loading]);
  // useEffect load once when loading is complated

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
    createProfile(formData, history, true);
  };

  return (
    <Fragment>
      <div className="registerPage">
        <div className="forms">
          <div className="formsHeader">
            <span className="icons clearfix">
              <i className="fas fa-user" />
              <h1>Edit Profile</h1>
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

            <input type="submit" />
            <Link to="/dashboard">Go Back</Link>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile }
)(withRouter(EditProfile));
