const router = require("express").Router();
const { User, Post } = require("../../models");
const sequelize = require("../../config/connection");

router.post("/", (req, res) => {
    Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    })
      .then((dbPostData) => res.json(dbPostData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;
