let express = require("express");
let passport = require("passport");
let Strategy = require("passport-local");
let User = require("../models/user");
let jwt = require("jsonwebtoken");
let settings = require("../settings.js");  

const authRouter = express.Router();


passport.use(new Strategy((usernameAttempt, passwordAttempt, done) => {  
  //find the user with the usernameAttempt given 
  User.findOne({
    username: usernameAttempt
  }, (err, currentUser) => {
    if (err) {
      //if there is an err pass it to passport and return false for auth 
      done(err, false);
    } else if (currentUser === null) {
      //if there is no user with the username given pass null for error and return false for auth
      done(null, false);
    } else {
      //test if the passwordAttempt hash is the same as the hash stored
      currentUser.auth(passwordAttempt, (isCorrect) => {
        //pass null for the error and return whether the password was correct for auth
        done(null, isCorrect)
      });
    }
  });
}));

authRouter.post("/signup", (req, res) => {  
  User.findOne({
    username: req.body.username
  }, (err, result) => {
    if (err) {
      res.status(500).send({
        success: false,
        err
});
    } else if (result !== null) {
      res.status(400).send({
        success: false,
        err: "That username already exists!"
});
    } else {
      let newUser = new User(req.body);
      newUser.save((err, user) => {
        if (err) {
          res.status(500).send({
           success: false,
           err
});
        } else {
          res.status(201).send({
            success: false,
            user: user.withoutPassword(),
            token: jwt.sign(user.withoutPassword(), settings.secret, {
                expiresIn: 30 * 60
            })
});
        }
      });
    } 
  });
});

authRouter.use(passport.initialize());

authRouter.post("/login", passport.authenticate("local", {session: false}), (req, res) => {  
  User.findOne({
    username: req.body.username
  }, (err, user) => {
    if (err) {
      res.status(500).send({
        success: false,
        err
});
    } else if (user === null) {
      res.status(400).send({
        success: false,
        err
});
    } else {
      res.status(201).send({
        success: true,         
        user: user.withoutPassword(),
        token: jwt.sign(user.withoutPassword(), settings.secret, {
          expiresIn: 30 * 60
        }),
      });
    }
  })
});

module.exports = authRouter;  