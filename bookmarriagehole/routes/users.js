var express = require('express');
var router = express.Router();
const User = require("../src/model/userSchema");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource pankaj chauhan');
});

// Create a new user
router.post('/users', async (req, res) => {
  const { name, email, password } = req.body;
   console.log("user email", name,email,password)
  try {
    const user = new User({ name, email, password });
    await user.save();
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    console.log("result comming")
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Update a user
router.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;

  try {
    const user = await User.findByIdAndUpdate(id, { name, email, age }, { new: true });
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Delete a user
router.delete('/users/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});


module.exports = router;
