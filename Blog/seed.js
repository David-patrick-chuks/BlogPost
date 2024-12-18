const fs = require("fs");
const Post = require("./model/postModel");
require("dotenv").config();
const mongoose = require('mongoose');

const data = [];
for (let i = 0; i < 500; i++) {
    data.push({
        author: `author_${i}`,
        content: `content_${i}`,
        title: `title_${i}`,
        like: `like_${i}`,
        image: `image_${i}`
    });
}

// Save it to a file or return the data
// fs.writeFileSync("mockData.json", JSON.stringify(data, null, 2));

console.log("Generated 500 mock objects.");

// const data =[
//     {
//         author : "gfhghg",
//         content : "gfhghg",
//         title : "gfhghg",
//         like : "gfhghg",
//         image : "gfhghg"
//     },
//     {
//         author : "gfhghg",
//         content : "gfhghg",
//         title : "gfhghg",
//         like : "gfhghg",
//         image : "gfhghg"
//     }
// ]

const datas ={
    author: "Rachel Job",
    content: "Cryptocurrency markets have seen dramatic swings, with Bitcoin and Ethereum leading volatility. Investors remain cautious amid regulatory uncertainty.",
    title: "Crypto Markets: Boom Or Bust?",
    like: "20",
        image:  "https://img.etimg.com/thumb/msid-116416450,width-1200,height-630,imgsize-54258,overlay-economictimes/articleshow.jpg"
    }

const mongoDbConnect = async () => {

    try {

        const db = await mongoose.connect(process.env.CONNECTION_STRING)
        // console.log(db);
        

    } catch (error) {
        console.log(error?.message ? error?.message : error);

    }

}

const seedData = async () => {

    try {
        console.log("we have started to seed");
        
        // Read the JSON file
        await mongoDbConnect()
        const postData = new Post(datas)
        await postData.save()
        console.log("data seeded successfully", postData);

    } catch (error) {
        console.log(error.message);
    }
}
 
seedData()