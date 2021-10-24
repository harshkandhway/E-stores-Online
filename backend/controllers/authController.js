const User = require('../models/user.js');
// const jwt = require('jsonwebtoken')
const {createJWT, attachCookiesToResponse} = require('../utils/jwt')
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
        const tokenUser = { name: user.name, userId:user._id, role: user.role }
        // const token = jwt.sign(tokenUser,'jwtSecret',{expiresIn: '1d'})
        const token = createJWT({payload:tokenUser});
        //create jwt - jwt.sign(payload,secret,options)
        //verify jwt - jwt.verify(token,secret)
        // const oneDay = 1000*60*60*24

        // res.cookie('token',token,{
        //     httpOnly:true,
        //     expires:new Date(Date.now()+oneDay),
        // })
        attachCookiesToResponse({res,user:tokenUser})
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