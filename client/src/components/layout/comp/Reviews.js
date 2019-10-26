import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

const Reviews = props => {
  return (
    <Fragment>
      <div className="reviewsSVG">
        <svg
          id="reviews_SVG"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1400 292.781"
        >
          <path
            className="reviews_SVG"
            d="M0,45s344.368,85.027,690.345,0S1400,45,1400,45l-1,258H-3Z"
            transform="translate(0 -7.219)"
          />
        </svg>
      </div>
      <div className="reviews">
        <div className="review">
          <div className="stars">
            <svg
              className="Pmm3mc"
              style={{ fill: 'red', width: '40px', height: '40px' }}
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <svg
              className="Pmm3mc"
              style={{ fill: 'red', width: '40px', height: '40px' }}
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <svg
              className="Pmm3mc"
              style={{ fill: 'red', width: '40px', height: '40px' }}
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <svg
              className="Pmm3mc"
              style={{ fill: 'red', width: '40px', height: '40px' }}
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <svg
              className="Pmm3mc"
              style={{ fill: 'red', width: '40px', height: '40px' }}
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </div>
          <div className="review-detail">
            You need it fixed 😁 they will help you friendly and very helpful
          </div>
          <div className="review-name">PAT M</div>
        </div>
        <div className="review">
          <div className="stars">
            <svg
              className="Pmm3mc"
              style={{ fill: 'red', width: '40px', height: '40px' }}
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <svg
              className="Pmm3mc"
              style={{ fill: 'red', width: '40px', height: '40px' }}
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <svg
              className="Pmm3mc"
              style={{ fill: 'red', width: '40px', height: '40px' }}
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <svg
              className="Pmm3mc"
              style={{ fill: 'red', width: '40px', height: '40px' }}
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <svg
              className="Pmm3mc"
              style={{ fill: 'red', width: '40px', height: '40px' }}
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </div>
          <div className="review-detail">
            I came in for tempered glass on my iPhone 7plus, bad thing is that
            it is very dirty they cleaned it and looks a brand new iPhone again.
            On top that they offered me warranty on tempered glass Back to
            business 5star 👌
          </div>
          <div className="review-name">SUDHEER R</div>
        </div>
        <div className="review">
          <div className="stars">
            <svg
              className="Pmm3mc"
              style={{ fill: 'red', width: '40px', height: '40px' }}
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <svg
              className="Pmm3mc"
              style={{ fill: 'red', width: '40px', height: '40px' }}
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <svg
              className="Pmm3mc"
              style={{ fill: 'red', width: '40px', height: '40px' }}
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <svg
              className="Pmm3mc"
              style={{ fill: 'red', width: '40px', height: '40px' }}
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <svg
              className="Pmm3mc"
              style={{ fill: 'red', width: '40px', height: '40px' }}
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </div>
          <div className="review-detail">
            They are good at what they do and have affordable prices. My son is
            very hard on his phones. He has tried different places and was
            ripped off. They are fair and do good quality work!!!
          </div>
          <div className="review-name"> STACY F</div>
        </div>
      </div>
    </Fragment>
  );
};

Reviews.propTypes = {};

export default connect(
  null,
  {}
)(Reviews);
