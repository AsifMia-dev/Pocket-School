const route = require('express').Router();
const {createBlogPostController ,getBlogPostController} = require('./controller');

// Get a blog post by id
route.get('/post/:id',getBlogPostController)

// Create a blog
route.post('/post',createBlogPostController);

module.exports = route;