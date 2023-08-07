const { body } = require("express-validator");
const User = require("../models/Users");

module.exports.signUp = function (req, res, next) {
  return [
    body("name", "Name is required").isString(),
    body("email", "Email is required")
      .isEmail()
      .withMessage("Provide in email form => abc@xyz.com")
      .custom((email, req) => {
        return User.findOne({ email: email })
          .then((user) => {
            if (user) {
              throw new Error("Email Already Exists");
            } else {
              return true;
            }
          })
          .catch((e) => {
            throw new Error(e.message);
          });
      }),

    body("password", "Password is required")
      .isAlphanumeric()
      .isLength({ min: 6, max: 10 })
      .withMessage("Password must be between 6-10 characters"),

    body("confirm_password", "Password doesn't match.").custom(
      (value, { req }) => {
        return req.body.confirm_password === req.body.password;
      }
    ),
  ];
};

module.exports.logIn = function (req, res, next) {
  return [
    body("email", "Email is Required")
      .isEmail()
      .custom((email, req) => {
        return User.findOne({ email: email })
          .then((data) => {
            if (data) {
              return true;
            } else {
              throw new Error(`User with email ${email} does not exist`);
            }
          })
          .catch((e) => {
            throw new Error(e.message);
          });
      }),

    body("password", "Password is required")
      .isAlphanumeric()
      .custom((password, { req }) => {
        return User.findOne({ email: req.body.email })
          .then((user) => {
            if (password === user.password) {
              return true;
            } else {
              throw new Error(
                `Password does not match the email ${req.body.email}.`
              );
            }
          })
          .catch((e) => {
            throw new Error(e.message);
          });
      }),
  ];
};
