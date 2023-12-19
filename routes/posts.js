const router = require("express").Router();
const verify = require("./verifyToken");

router.get("/", verify, (req, res) => {
  res.send({
    posts: {
      title: "First Post",
      description: "First Posts Description",
    },
  });
});

module.exports = router;
