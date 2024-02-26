exports.getPosts = (req, res, next)=>{
    res.status(200).json({posts: [{
            title: 'First Post',
            content: 'This is the first post',
        }]
    });
    // 200 is the default status code, but we can explicitly set other status codes too
};

// We don't use res.render() here, because APIs donot render views or HTML
// And res.render() renders views or HTML

// Else we will return a json response
// Json is a method provide by express to conveniently return a response with json data, with the right headers being set and so on
// We can pass a normal javascript object to json and it will be converted to the json format and sent back as a response to the client who sent the request and there we can send anything we want


exports.createPost = (req, res, next)=>{
    const title = req.body.title;
    const content = req.body.content;

    // CREATE POST IN DB
    // status code 201 is a better version of success code, in addition it also tells that the resource was created
    res.status(201).json({
        message: 'Post created successfully!',
        post: { id: new Date().toISOString(), title: title, content:content}
    });
};