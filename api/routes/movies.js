const router = require("express").Router();
const Movie = require("../models/Movie");
const verify = require("../verifyToken");

//  CREATE

router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newMovie = new Movie(req.body);

    try {
      const savedMovie = await newMovie.save();
      res.status(201).json(savedMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not Allowed!");
  }
});

//  UPDATE

router.put("/:id", async (req, res) => {
  if (req.user.isAdmin) {
    const newMovie = new Movie(req.body);

    try {
      const updatedMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        { $set: req.body }, //setting the new data
        { new: true } //making sure it doesnt update old one
      );
      res.status(201).json(updatedMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not Allowed!");
  }
});

//  DELETE

router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newMovie = new Movie(req.body);

    try {
      const updatedMovie = await Movie.findByIdAndDelete(req.params.id);
      res.status(201).json("Movie has been Deleted.");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not Allowed!");
  }
});

//  GET
//  I Removed the Verify (verify jwt token) --> was causing the CORS & Proxy Error\
router.get("/find/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(201).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});

//  GET RANDOM
//  I Removed the Verify (verify jwt token) --> was causing the CORS & Proxy Error
router.get("/random", async (req, res) => {
  const type = req.query.type;
  let movie;
  try {
    if (type === "series") {
      movie = await Movie.aggregate([
        { $match: { isSeries: true } }, // this will match if it is series based on out Movie models
        { $sample: { size: 1 } }, // will give a random sample
      ]);
    } else {
      movie = await Movie.aggregate([
        { $match: { isSeries: false } }, // this will match if it is not series
        { $sample: { size: 1 } }, // will give a random sample
      ]);
    }

    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL

router.get("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const movies = await Movie.find();
      res.status(200).json(movies.reverse()); //send us the latest movie added first
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

module.exports = router;
