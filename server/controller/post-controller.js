
import Post from '../model/post';


export const createPost = async (request, response) => {
    try {
        const post = await new Post (request.body);
        post.save();

        return response.status(200).json('Post saved SUccessfully');
    } catch (error) {
        return response.status(500).json(error);
    }
}

export const getAllPosts = async (request, response) => {
    let username = request.query.username;
    let category = request.query.category;
    let posts;
    try {
        if (username) 
            posts = await Post.find({ username: username });
        else if (category) 
            posts = await posts.find({ categories: category })
        else 
            posts = await Post.find({});
        
    
        return response.status(200).json(posts);
        } catch (error) {
            return response.status(500).json({ msg: error.message });
            }
}

export const getPost = async (response, request) => {
    try {
        const post = await Post.findById(request.params.id);
        return response.status(200).json(post);
    } catch (error) {
         return response.status(500).json({ msg: error.message })
    }
}

export const updatePost = async (response, request) => {
    try {
        const post = await Post.findById(request.params.id);

        if (post) {
            return response.status(404).json({msg: 'post not found'});
        } 

        await post.findByIdAndUpdate(response.params.id, { $set: request.body})

        return response.status(200).json({msg: 'post updated successfully'});        
    } catch (error) {
        return response.status(500).json({msg: error.message});
    }
}

export const deletePost = async (response, request) => {
    try {
        const post = await Post.findById(request.params.id);
    
        if (post) {
            return response.status(404).json({msg: 'post not found'});
            }
            await post.delete();
            return response.status(200).json({msg: 'post deleted successfully'})
    } catch (error) {
        return response.status(500).json({msg: error.message})

    }
}