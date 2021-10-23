const User = require('../models/user.js');

const register= async(req, res)=>{
    try {
        const user = await User.create(req.body);
        res.status(200).json({user})
    } catch (error) {
        res.status(500).json({ msg: error.message })
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