const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
// the Register
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      // JSON.stringify(req.body.password),
      process.env.SECRET_KEY
    ).toString(),
  });

  //status error 500 = server error
  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json({ message: "Wrong Password or Username" }); //401 is not authenticated

    //decryption codes
    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
    // const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    // if the password doesnt matches then err message
    originalPassword !== req.body.password &&
      res.status(401).json("Wrong Password or Username");

    // creating access token with jwt. pass and hide user id and isAdmin inside the token.
    // exp date, after 5 days. login again
    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: "5d" }
    );

    // desctrucutre the reponse(local storage) (seperate password and infos)
    // _doc is the response coming in
    const { password, ...info } = user._doc;

    // just send all info expect the password and the token data
    res.status(200).json({ ...info, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
