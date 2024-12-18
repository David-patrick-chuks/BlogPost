const cloudinary = require('cloudinary').v2;

require("dotenv").config();

const secret = {
    cloudinary_name: process.env.CLOUDINARY_NAME || null,
    cloudinary_api_key: process.env.CLOUDINARY_APIKEY || null,
    cloudinary_api_secret:  process.env.CLOUDINARY_SECRET || null
}


cloudinary.config({
    cloud_name: secret.cloudinary_name ,
    api_key: secret.cloudinary_api_key ,
    api_secret: secret.cloudinary_api_secret,
});


module.exports = cloudinary;