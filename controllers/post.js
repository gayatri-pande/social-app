const getPosts = (req , res) => {
    try{
         res.send('Post list');
    }catch(error) {
        res.send('oops, something went wrong!!');
    }
}