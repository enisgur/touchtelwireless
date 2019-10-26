import React, { useEffect, Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import Landing from './components/layout/Landing';
// import Brand from './Brand';
// import Model from './Model';

import { deleteSelectedIssue, getDate, sumbitBooking } from '../../actions/fix';

const Booking = ({ fix, deleteSelectedIssue, getDate, sumbitBooking }) => {
  useEffect(() => {
    getDate();
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    phone: '',
    mail: '',
    // date: `2019-09-24`,
    date: '',
    hours: 'morning',
    message: '',
    once: true
  });

  const { name } = formData;
  const { lastName } = formData;
  const { phone } = formData;
  const { mail } = formData;
  const { date } = formData;
  const { hours } = formData;
  const { message } = formData;
  const { once } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    // clearProducts();
    // searching();
    // searchProducts(search);
    sumbitBooking(formData);
    // console.log(formData);
  };

  let onGoBack = e => {
    // const { name } = e.target;
    // const { id } = e.target;
    // console.log(id);
    deleteSelectedIssue();
  };
  return (
    <Fragment>
      {/* select todays date by default */}
      {once
        ? fix.dateNow
          ? setFormData({ ...formData, date: fix.dateNow, once: false })
          : ''
        : ''}
      <div className="fix-layout">
        <div className="fix-title">Booking</div>
        <div className="fix-title-detail">Select "day" and "time"</div>
        <div className="fix-selected">
          {fix.selectedBrand
            ? fix.selectedModel
              ? fix.selectedIssue
                ? `${fix.selectedBrand} > ${fix.selectedModel} > ${fix.selectedIssue}`
                : `${fix.selectedBrand} > ${fix.selectedModel}``${fix.selectedBrand} > ${fix.selectedModel}`
              : fix.selectedBrand
            : 'No Brand'}
        </div>
        <div className="bookingForm">
          <form onSubmit={e => onSubmit(e)}>
            <div className="formGroup">
              <label htmlFor="name">First Name :</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
                value={name}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="last-name">Last Name :</label>
              <input
                type="text"
                name="lastName"
                id="last-name"
                placeholder="Last Name"
                required
                value={lastName}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="phone">Phone Number :</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                required
                value={phone}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="mail">E-Mail</label>
              <input
                type="email"
                name="mail"
                id="mail"
                placeholder="E-Mail"
                value={mail}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="date">Date :</label>
              <input
                type="date"
                name="date"
                id="date"
                required
                // value={fix.dateNow}
                min={fix.dateNow}
                value={date}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="hours">Hours :</label>
              <select
                name="hours"
                id="hours"
                value={hours}
                required
                onChange={e => onChange(e)}
              >
                <option
                  value="morning"

                  // value={hours.morning}
                >
                  10AM - 1PM
                </option>
                <option
                  value="after-noon"
                  // value={hours.afternoon}
                  // onChange={e => onChange(e)}
                >
                  1PM - 4PM
                </option>
                <option
                  value="evening"
                  // value={hours.evening}
                  // onChange={e => onChange(e)}
                >
                  4PM - 7PM
                </option>
                <option
                  value="night"
                  // value={hours.night}
                  // onChange={e => onChange(e)}
                >
                  7PM - 8:40PM
                </option>
              </select>
            </div>
            <div className="formGroup">
              <label htmlFor="message">Note :</label>
              <textarea
                name="message"
                className="booking-textarea"
                placeholder="Optional Message.."
                value={message}
                onChange={e => onChange(e)}
              ></textarea>
            </div>
            <input type="submit" value="Submit" onSubmit={e => onSubmit(e)} />
          </form>
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

Booking.propTypes = {
  getDate: PropTypes.func.isRequired,
  deleteSelectedIssue: PropTypes.func.isRequired,
  sumbitBooking: PropTypes.func.isRequired,
  fix: PropTypes.object
};

const mapStateToProp = state => ({
  fix: state.fix
});

export default connect(
  mapStateToProp,
  { deleteSelectedIssue, getDate, sumbitBooking }
)(Booking);
