const Joi = require("joi");

const blogSchema = Joi.object({
    title: Joi.string().required().min(3).messages({
        "string.empty": "Title is required",
        "string.min": "Title must be at least 3 characters long",
        "any.required": "Title is required"
    }),
    content: Joi.string().required().min(10).messages({
        "string.empty": "Content is required",
        "string.min": "Content must be at least 10 characters long",
        "any.required": "Content is required"
    }),
    author: Joi.string().required().messages({
        "string.empty": "Author is required",
        "any.required": "Author is required"
    }),
    
});

class Blog {
    constructor(id , title, content, author) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.author = author;
        this.createdAt =new Date();
    }

    static validate(blogData) {
        return blogSchema.validate(blogData);
    }
}

module.exports = Blog;
module.exports.blogSchema = blogSchema;