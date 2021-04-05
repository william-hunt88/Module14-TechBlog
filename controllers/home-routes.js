const { Post, User, Comment } = require("../models");
const router = require("express").Router();

router.get("/", (req, res) => {
  Post.findAll({
    attributes: ["id", "title", "content", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  }).then((dbPostData) => {
    const posts = dbPostData.map((post) => post.get({ plain: true }));
    console.log(posts)
    console.log(req.session.loggedIn)

    if (req.session.loggedIn) {
      res.render("homepage", {
        posts,
        loggedIn: req.session.loggedIn,
      });
    } else {
      res.render("homepage", {
        posts
      });
    }
  });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/post/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "content", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }

      // serialize the data
      const post = dbPostData.get({ plain: true });
      console.log(post);

      // pass data to template
      if(req.session.loggedIn) {
        res.render("single-post", {
          post,
          loggedIn: req.session.loggedIn,
        })
      }else {
        res.render("single-post", {
          post,
          loggedIn: req.session.loggedIn,
        })
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
