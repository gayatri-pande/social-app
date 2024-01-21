const {Post} = require('../models/post');


const getPosts = async (req , res) => {
    try{  

        const data = await Post.find();
         res.send(data);
    }catch(error) {
        console.log('error');
        res.send('oops, something went wrong!!');
    }
};


module.exports = {
    getPosts,
};