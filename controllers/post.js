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

const addPost = async (req , res ) => {
    try{
        const data = await Post.create(req.body);
        res.send(data);
        res.send({message :" data added successfully"});
    }catch(error){
        console.log(error);
        res.send('oops something went wrong');
    }
};

const putPost = async (req,res) => {
    try{
        let existingdata = await Post.findById(req.params.id);
        if(!existingdata){
            return res.send('no data with this id');

        }
        console.log('Existing data' , existingdata);
        const result = await Post.updateOne({_id : existingdata._id} , req.body);
        const data = await Post.findById(req.params.id);
        res.send(data)
        console.log('result' ,result);
        return res.send({result,message : 'updated successfully'});

    } catch (error) {
        console.log('error' , error);
        res.send('opps, something went wrong !!');
    }
   
};


const deletePost = async(req,res) => {
    try{
        const existingPost = await Post.findById(req.params.id);
        if(!existingPost) {
            return res.status(401).send({message: 'no post found'});
        }
        await Post.deleteOne({ _id: req.params.id});
        res.send({message:'Post deleted successfully'});
    }catch(error){
        res.send('Oops somethig went wrong!!');
    }
};
module.exports = {
    getPosts,
    addPost,
    putPost,
    deletePost,
};