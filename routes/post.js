const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async(req, res) => {
    const posts = await Post.find({});
    res.status(200).json(posts);

    });
});

router.post('/', async(req, res) => {
    const postData = {
        title: req.body.title,
        text: req.body.text
    }

    const post = new Post(postData);

    await post.save();
    res.status(201).json(post);
});

router.delete('/:Id', async(req, res) => {
    Post.remove({_id: req.params.Id});
    res.status(200).json({
        message: 'Удалено'
    });
});





module.exports = router;