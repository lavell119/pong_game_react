const User = require('../models/userModel')


//login user
const loginUser = async (rep, res) => {
    res.json({mssg: 'login user'})
}

//signup user
const signupUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.signup(email, password)
        
        //send user back as a response to the browser
        res.status(200).json({ email, user })
    } catch (error){
        res.status(400).json({ error: error.message })
    }
}

module.exports = { signupUser, loginUser }