const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');

// const User = require('../../models/User');

const secretExp = 3600; // CHANGE_HERE to 3600

// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get('/', auth, async (req, res) => {
  try {
    // const user = await User.findById(req.user.id).select('-password');
    const user = req.user;
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/auth
// @desc    Authenticate user & get token
// @access  Public
router.post(
  '/',
  [
    check('appid', 'Error id: AZPOKLD873HS!KS93').exists(),
    check('appsecret', 'Error id:LLX,90-PL000').exists()
  ],
  async (req, res) => {
    // console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    const { appid, appsecret } = req.body;

    const hashSecret =
      '$2y$10$fakMZ5giGaJyJGGpO/RlH.krmSXdsh2JSLKYl8aaXmG1vDugZE9J2';

    try {
      // See if user exists
      //   let user = await User.findOne({ email });

      //   if (!user) {
      //     return res
      //       .status(400)
      //       .json({ errors: [{ msg: 'Invalid Credentials' }] });
      //   }

      //   const isMatch = await bcrypt.compare(password, user.password);
      const isMatch = await bcrypt.compare(appsecret, hashSecret);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      // Return jsonwebtoken
      //   const payload = {
      //     user: {
      //       id: user.id
      //     }
      //   };
      const payload = {
        user: {
          id: appid
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: secretExp },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
