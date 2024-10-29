const {default: mongoose} = require("mongoose");
const userModel = require("../models/user.model");
const { error } = require("console");

const createUser = (obj) =>{
    try {
        const user = userModel.create(obj);
        return user;
    } catch (error) {
        return error;
        
    }

};

const retrieveUser = async ()=>{
    try {
        const user = await userModel.find({});
        if (user.length > 0) {
            return user;
            
        } else {
            return "No data found"
            
        }
    } catch {
        return error;
        
    }
};

const updateUser = async(id, obj) =>{
    const filter = { _id: id };
    const update = obj;
    try {
        const user = await userModel.updateOne(filter, update);
        if(user){
            return user;
        }
    } catch (error) {
        return error
    }
};

const deleteId = async(id, obj) =>{
    const filter = {_id: id};
    const del = obj;
    try {
        const user = await userModel.deleteOne(filter, del);
        if(user){
            return user;

        }
    } catch (error) {
        return error;
        
    }
};




module.exports = {createUser, retrieveUser, updateUser, deleteId}