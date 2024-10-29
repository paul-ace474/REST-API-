const userModel = require("../models/user.model");
const userService = require("../service/user.service");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
    const data = req.body;
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const result = await userService.createUser(data);
    return res
      .status(201)
      .json({ msg: `User Created Successfully`, data: result });
  };

  const retrieveUser = async(req, res) =>{
    const data = req.body;
    const user = await userService.retrieveUser(data);
    if (user.length < 1) {
        return res.status(404).json({msg: `user not found`, data})
        
    } else {
        return res.status(201).json({msg: `User found`, data: user});
        
    }

  };

  const updateUser = async(req, res) =>{
    const id = req.params.id;
    const body = req.body;
    const user = await userService.updateUser(id, body);
    if (user) {
        return res.status(200).json({msg: `User updated successfuly`, id: user});
        
    }
  };

  const deleteId = async(req, res) =>{
    const id = req.params.id;
    const body = req.body;
    const user = await userService.deleteId(id, body);
    if (user) {
        return res.status(200).json({msg:`User deleted successfylly`, id: user});
        
    }
  };

  module.exports = {createUser, retrieveUser, updateUser, deleteId}