let passport = require("passport");
let Strategy = require("passport-local");


passport.use(new Strategy((usernameAttempt, passwordAttempt, done) => {  
  User.findOne({
    username: usernameAttempt
  }, (err, currentUser) => {
    if (err) {
      done(err, false);
    } else if (currentUser === null) {
      done(null, false);
    } else {
      currentUser.auth(passwordAttempt, (isCorrect) => {
        done(null, isCorrect)
      });
    }
  });
}));