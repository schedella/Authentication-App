var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var userSchema = mongoose.Schema({
    local: {
        username: String,
        password: String
    },
    facebook: {
        id: String,
        token: String,
        email: String,
        name: String
    },
    google: {
        id: String,
        token: String,
        email: String,
        name: String
    }
});

userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
}

userSchema.methods.validPassword = function (password) {
    console.log(password);
    console.log(this.local.password);
    console.log(bcrypt.compareSync(this.local.password, password));
    return bcrypt.compareSync(password, this.local.password);
}

module.exports = mongoose.model('User', userSchema);