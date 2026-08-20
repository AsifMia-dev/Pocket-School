const Blog = require('./blogModel')
const Blogs = require('./Blogs')

var blogId = 0;

const getBlogPostController = (req, res) => {
    const { id } = req.params;

    if (!Blogs[id]) {
        return res.status(404).json({ message: `Blog post with ID ${id} not found` });
    }

    const blog = Blogs[id];
    return res.status(200).json({ ...blog });
};

const createBlogPostController = (req,res) => {

    const {title,content,author} = req.body;

    const { error} = Blog.validate({ title, content, author });

    if (error) {
     return res.status(400).json({ message: error.details});
    }
    
    blogId++;
    const blog = new Blog(blogId,title , content,author)

    Blogs[blogId] = blog;

    return res.status(201).json({  message: "Blog post created successfully", post : Blogs[blogId]})
    
}

module.exports = {
    createBlogPostController,
    getBlogPostController
}