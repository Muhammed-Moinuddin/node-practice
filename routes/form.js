const express = require("express");
const router = express.Router();
const path = require("path");

// router.get("/", (req,res) => {
//     res.send(`
//     <form action="/form/submit" method="POST">
//         <input name="data" type="text"/>
//         <button>Submit</button>
//     </form>
//     `);
// });

router.get("/", (req,res) => {
    // res.sendFile(path.join(process.cwd(), "views", "form.html"));
    // res.render("form", {user: "Ishaq"});
    res.render("form", {user: req.query.name || "User"});

});

router.post("/submit", (req,res) => {
    res.send(req.body);
});

module.exports = router;