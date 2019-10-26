import axios from 'axios';
import {
  axiosURL,
  SELECTEDBRAND,
  SELECTEDMODEL,
  SELECTEDISSUE,
  DELETESELECTEDBRAND,
  DELETESELECTEDMODEL,
  DELETESELECTEDISSUE,
  ALLFIX,
  ALLMODELS,
  GETDATE,
  SUBMITBOOKING
} from './types';

// SET AXIOS PROXY BASEURL
axios.defaults.baseURL = axiosURL;

// SUBMIT BOOKING
export const sumbitBooking = ({
  date,
  hours,
  lastName,
  mail,
  message,
  name,
  phone
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({
    date,
    hours,
    lastName,
    mail,
    message,
    name,
    phone
  });

  try {
    const res = await axios.post('/api/fix/booking', body, config);

    dispatch({
      type: SUBMITBOOKING,
      payload: res.data
    });

    // dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    //   if (errors) {
    //     errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    //   }

    //   dispatch({
    //     type: REGISTER_FAIL
    //   });
    // }

    if (errors) {
      // errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
      console.log(errors);
    }

    // dispatch({
    //   type: REGISTER_FAIL
    // });
  }
};

export const getDate = () => async dispatch => {
  try {
    const res = await axios.get('/date');
    // var returnDate = await res.data.date;
    // console.log(res.data.date);

    dispatch({
      type: GETDATE,
      payload: res.data.date
    });
  } catch (err) {
    console.log(err);
  }
};

export const getSelectedBrand = brand => async dispatch => {
  try {
    dispatch({
      type: SELECTEDBRAND,
      payload: brand
    });
  } catch (err) {
    console.log(err);
  }
};

export const getSelectedModel = model => async dispatch => {
  try {
    dispatch({
      type: SELECTEDMODEL,
      payload: model
    });
  } catch (err) {
    console.log(err);
  }
};

export const getSelectedIssue = issue => async dispatch => {
  try {
    dispatch({
      type: SELECTEDISSUE,
      payload: issue
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteSelectedBrand = () => async dispatch => {
  try {
    dispatch({
      type: DELETESELECTEDBRAND
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteSelectedModel = () => async dispatch => {
  try {
    dispatch({
      type: DELETESELECTEDMODEL
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteSelectedIssue = () => async dispatch => {
  try {
    dispatch({
      type: DELETESELECTEDISSUE
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAllBrand = () => async dispatch => {
  try {
    const res = await axios.get('/api/fix');

    dispatch({
      type: ALLFIX,
      payload: res.data
      // payload: brend
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAllModels = model => async dispatch => {
  try {
    const res = await axios.get(`/api/fix/${model}`);

    dispatch({
      type: ALLMODELS,
      payload: res.data
      // payload: brend
    });
  } catch (err) {
    console.log(err);
  }
};

// export const getAllBrand = () => dispatch => {
//   try {
//     dispatch({
//       type: ALLFIX
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };
