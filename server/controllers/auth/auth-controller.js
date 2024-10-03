const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');


//register
const registerUser = async (req, res) => {
    const { userName, email, password } = req.body;
    try {
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ userName, email, hashPassword });
        await user.save();
        res.status(201).json({ success:true, message: "Registration Successful" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}


//login
const login = async (req,res)=>{
    const {email,password} = req.body;
    try {
        
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

//logout


//auth middleware








module.exports = {registerUser};