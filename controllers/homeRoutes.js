const router = require("express").Router();
const { User } = require("../models");
// const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    res.status(200);
    res.render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/newband", async (req, res) => {
  try {
    res.status(200);
    res.render("userForm");
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/newconcert", async (req, res) => {
  try {
    res.status(200);
    res.render("concertForm");
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/newvenue", async (req, res) => {
  try {
    res.status(200);
    res.render("venueForm");
  } catch (err) {
    res.status(500).json(err);
  }
});
// router.get("/", withAuth, async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       attributes: { exclude: ["password"] },
//       order: [["name", "ASC"]],
//     });

//     const users = userData.map((project) => project.get({ plain: true }));

//     res.render("homepage", {
//       users,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get("/login", (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect("/");
//     return;
//   }

//   res.render("login");
// });

module.exports = router;
