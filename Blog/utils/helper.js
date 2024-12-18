const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const passwordHasher = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    return hashed;
}

const createToken = (id, email) => {
    const token = jwt.sign({ email, id}, process.env.JWT_SECRET, {
        expiresIn: "10d"
    });
    return token;
}

module.exports = {
    passwordHasher, 
    createToken
}