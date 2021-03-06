const router = require("express").Router();
const User = require("../../models/userModel");
const { loginValidation } = require("./validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(203).send(error.details[0].message);

  //checking if the e-mail is already in database
  const registeredUser = await User.findOne({ email: req.body.email });
  if (!registeredUser)
    return res.status(203).send("E-mail or password is incorrect");

  //check if the password is correct
  const validPass = await bcrypt.compare(
    req.body.password,
    registeredUser.password
  );
  if (!validPass) return res.status(203).send("Password is Incorrect");

  //Create and Assign a Token
  const token = jwt.sign(
    { _id: registeredUser._id },
    "asdsadASADsadaskmkmöcscmvscvçfdkmbf",
    { expiresIn: 60000 }
  );
  res.header("token", token);

  //Update the logins of the user
  registeredUser.logins.unshift(Date());
  await registeredUser.save();
  let curUser = {
    username: registeredUser.name,
    words: registeredUser.words,
    email: registeredUser.email,
    loggedIn: true
  };
  res.send(curUser);
});

module.exports = router;
