const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const verify = require("../verifyToken");

//CRUDE OPERATIONS
//  UPDATE
// need to be verified using JWT --> contains the id and wether its admin or not
router.put("/:id", verify, async (req, res) => {
  // checks if the param id is included in
  if (req.user.id === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        // encrypting the password
        req.body.password,
        process.env.SECRET_KEY
      ).toString();
    }

    // find the ID (req.params.ID) and Update. We are setting the data and if any changes -> set that as new data
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true } // if new changes -> set this as data
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can only update your own account");
  }
});

//  DELETE
// IF user ID match or user is Admin or verified with jwt --> findByIdandDelete the user
router.delete("/:id", verify, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User was just deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can only update your own account");
  }
});

//  GET
// Anyone can get the data but only the infos (no passwords)
router.get("/find/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...info } = user._doc;
    res.status(200).json(info);
  } catch (err) {
    res.status(500).json(err);
  }
});

//  GET ALL
// Only admin has access when verified with jwt
//                      --> If there is a query then find the user data, sort the most recent (-1)& only 10
//                          else send all the users data
router.get("/", verify, async (req, res) => {
  const query = req.query.new;
  if (req.user.isAdmin) {
    try {
      const users = query
        ? await User.find().sort({ _id: -1 }).limit(10)
        : await User.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res
      .status(403)
      .json("You are not Admin, you are not allowed to see all users!");
  }
});

//  GET USER STATS
// getting todays date --> current year - 1 --> last year
router.get("/stats", async (req, res) => {
  const today = new Date();
  const lastYear = today.setFullYear(today.setFullYear() - 1);

  const monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  try {
    // this is some mongoDB code, need to learn more
    // aggregate() -> used to calculate valuees for the data in a collection
    const data = await User.aggregate([
      {
        $project: {
          // looks at project/month
          month: { $month: "$createdAt" }, //looks at month and createdAt date and send a index number(1-12)
        },
      },
      {
        // this is what is returned
        $group: {
          _id: "$month", // id is the month.
          total: { $sum: 1 }, // adds the total user per month
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
