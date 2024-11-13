const userModel = require("../models/user.model");
const userService = require("../service/user.service");
const bcrypt = require("bcrypt");
const mailSender = require("../util/mailer");


const createUser = async (req, res) => {
  const data = req.body;
  data.password = bcrypt.hashSync(data.password, 10);
  if (data.email === "") {
    res.json({ msg: `email required` });
  }
  else {
    const newUser = await userService.createUser(data);
    mailSender.mailSender(newUser.email);
    return res
    .status(201)
    .json({ msg: `User Created Successfully`, data: newUser });
  }
};

const retrieveUser = async (req, res) => {
  const data = req.body;
  const user = await userService.retrieveUser(data);
  if (user.length < 1) {
    return res.status(404).json({ msg: `user not found`, data });
  } else {
    return res.status(201).json({ msg: `User found`, data: user });
  }
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const user = await userService.updateUser(id, body);
  if (user) {
    return res.status(200).json({ msg: `User updated successfuly`, id: user });
  }
};

const deleteId = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const user = await userService.deleteId(id, body);
  if (user) {
    return res.status(200).json({ msg: `User deleted successfylly`, id: user });
  }
};

module.exports = { createUser, retrieveUser, updateUser, deleteId };
