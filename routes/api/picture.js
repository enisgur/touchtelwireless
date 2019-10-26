const express = require('express');
const fileUpload = require('express-fileupload');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const config = require('config');

router.use(fileUpload());

const secretExp = 3600; // CHANGE_HERE to 3600

router.post(
  '/pic',
  auth,
  [
    check('randomnumber', 'randomnumber is required')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    if (req.files === null) {
      return res.status(400).json({
        errors: [
          { msg: 'No file uploaded', param: 'picture', location: 'files' }
        ]
      });
    }

    try {
      const picture = req.files.picture;
      const { randomnumber } = req.body;

      // split picture name .png .jpg ... add some random number to avoid same pic and add extension to end again.
      const orjPicName = picture.name;
      // const randomNum = Math.floor(Math.random() * 100001);
      const randomNum = randomnumber;
      const splitedName = orjPicName.split('.');
      const newPicName = splitedName[0] + String(randomNum);
      const newPicExt = '.' + splitedName[1];
      const newPicture = newPicName + newPicExt;

      await picture.mv(
        // `${__dirname}/../../../public/img/products/uploads/${newPicture}`,
        `${__dirname}/../../client/public/img/products/uploads/${newPicture}`,
        // `${__dirname}/../../client/build/img/products/uploads/${newPicture}`,
        err => {
          if (err) {
            console.error(err);
            return res.status(500).send(err);
          }
        }
      );

      await picture.mv(
        // `${__dirname}/../../../public/img/products/uploads/${newPicture}`,
        // `${__dirname}/../../client/public/img/products/uploads/${newPicture}`,
        `${__dirname}/../../client/build/img/products/uploads/${newPicture}`,
        err => {
          if (err) {
            console.error(err);
            return res.status(500).send(err);
          }
        }
      );

      res.json({ msg: 'Success !', ok: true });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
