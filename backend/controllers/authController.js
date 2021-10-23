const User = require('../models/user.js');
const jwt = require('jsonwebtoken')
const register= async(req, res)=>{
    try {
        const {email,name,password} = req.body;
        const emailAlreadyExists = await User.findOne({email})
        if(emailAlreadyExists){
            return res.status(404).json({msg: `email already exist`})
        }

        const isFirstAccount = (await User.countDocuments({}))===0;
        const role = isFirstAccount? 'admin':'user';
        const user = await User.create({name, email, password, role});
        const tokenUser = {name: user.name, userId:user._id, role: user.role}
        const token = jwt.sign(tokenUser,'jwtSecret',{expiresIn: '1d'})

        res.status(200).json({user:tokenUser,token})
    } catch (error) {
        res.status(500).json({ msgR: error.message })
    }
}
const login = async(req, res)=>{
    res.send('login user');
};
const logout= async(req,res)=>{
    res.send('logout user');
};

module.exports = {
    register,
    login,
    logout
};