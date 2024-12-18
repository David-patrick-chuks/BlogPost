const mongoose = require('mongoose');

// const mongoDbConnect = () => {
//     const con = mongoose.connect(process.env.CONNECTION_STRING)
//     .then(() => console.log('Database connected successfully'))
//     .catch(err => console.log('Database connection failed', err))
// }

const mongoDbConnect = async () => {

    try {

        const db = await mongoose.connect(process.env.CONNECTION_STRING)
        // console.log(db);
        console.log('Database connected successfully')
        

    } catch (error) {
        console.log(error?.message ? error?.message : error);

    }

}


module.exports = mongoDbConnect;