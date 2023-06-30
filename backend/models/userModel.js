const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.statics.signup = async function(email, password) {
    const user = await this.create({ email, password })
    console.log("user saved to db")
    return user
}

module.exports = mongoose.model('User', userSchema)

