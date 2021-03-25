const { Post, User, Comment } = require('../models');
const router = require('express').Router();


router.get('/', (req, res) => {
  Post.findAll({
    attributes: [
      "id",
      "title",
      "content",
      "created_at",
    ],
    include: [{
      model: User,
      attributes:["username"]
    }]
  })
  .then((dbPostData) => {
    const posts = dbPostData.map((post) => post.get({ plain: true}));

    if(req.session.loggedIn) {
      res.render('homepage', {
        posts,
        layout: "dashboard" 
      })
    } else {
      res.render('homepage');
    }
  })
});

router.get("/login", (req, res) => {
  if(req.session.loggedIn) {
    res.redirect('/');
    return;
  }
    res.render('login');
});

router.get("/dashboard", (req, res) => {
  res.render('dashboard', {
    layout: "dashboard",
  })
});

router.get("/post/:id", (req, res) => {
  console.log(req.params.id)
  Post.findAll({
    where: {
      id: req.params.id
    }
  }).then((dbPostData) => res.json(dbPostData))
})





module.exports = router;