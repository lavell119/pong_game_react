const User = require('../models/UserModel')


//login user
const loginUser = async (rep, res) => {
    res.json({mssg: 'login user'})
}

//signup user
const signupUser = async (req, res) => {
    const { email, password } = req.body
    User.signup(email, password)
}

module.exports = { signupUser, loginUser }