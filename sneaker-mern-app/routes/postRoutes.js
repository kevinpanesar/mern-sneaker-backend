const router = require("express").Router();
const Post = require("../models/postModel");

router.post("/", async (req, res) => {
  const {
    title,
    images,
    price,
    cities,
    date,
    colorway,
    styleCode,
    mensFlag,
    womensFlag,
    kidsFlag,
    clothing,
    shoe,
  } = req.body;

  const newPost = new Post({
    title,
    colorway,
    tags,
    images,
    releaseDate,
    fullReleaseDate,
    price,
    cities,
    date,
    mensFlag,
    womensFlag,
    kidsFlag,
  });

  try {
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (err) {
    console.log(err);
  }
});

router.get("/posts/:postID", async (req, res) => {
  const posts = await Post.find();
  const ID = req.params.postID;
  const post = posts.filter((element) => {
    if (element._id == ID) {
      return element;
    }
  });

  res.json(post);
});

router.get("/shoes", async (req, res) => {
  const posts = await Post.find();
  const shoes = posts.filter((element) => {
    if (element.shoe === true) {
      return element;
    }
  });

  res.json(shoes);
});

router.get("/posts", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

router.get("/clothing", async (req, res) => {
  const posts = await Post.find();
  const shoes = posts.filter((element) => {
    if (element.clothing === true) {
      return element;
    }
  });

  res.json(shoes);
});

module.exports = router;
