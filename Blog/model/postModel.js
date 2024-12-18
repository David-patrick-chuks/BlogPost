const mongoose = require('mongoose'); 


var userSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    image:{
        type:String,
    },
    title:{
        type:String,
    },
    like:{
        type: Number,
        default: 0
    },
    // like:[{
    //     type: mongoose.Types.ObjectId,
    //     ref: "User"
    // }],
    author: {
        type: String,
        // ref: "User"
    },
    UserId: {
        type: String,
        // unique: true
        // ref: "User"
    }
});

//Export the model
const Post = mongoose.model('Post', userSchema);
module.exports = Post