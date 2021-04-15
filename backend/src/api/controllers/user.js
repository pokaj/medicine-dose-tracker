const mongoose = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
    try{
        const existing_user = await User.findOne({email: req.body.email});
        if(existing_user === null){
            const hash_password = bcrypt.hashSync(req.body.password, 10);
            const user = new User({
                _id: mongoose.Types.ObjectId(),
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                phone: req.body.phone,
                age: req.body.age,
                password: hash_password
            });
            await user.save();
            return res.status(201).json({status: true, user});
        }else{
            return res.status(409).json({status: false, message: 'User with this email already exists'});
        }
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({status: false, error});
    }
}

exports.login = async (req, res)=>{
    try{
        const user = await User.findOne({email:req.body.email})
        if(user === null){
            return res.status(401).json({status:false, message:"Authentication Failed"});
        }
        const success = await bcrypt.compare(req.body.password, user.password);
        if(success){
            const token = jwt.sign({
                _id: user._id,
                email: user.email,
            }, process.env.JWT_KEY, {
                expiresIn: "1h"
            });
            return res.status(200).json({status: true, user, token});
        }else{
            return res.status(400).json({status: false, message: 'Authentication failed'});
        }
    }
    catch(error){
        console.log(error);
        return res.status(400).json({status: false, error});
    }
}
