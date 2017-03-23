const discussion = require("../controllers/discussionController.js");

module.exports = function(app){
  app.post("/user", discussion.user);
  app.post("/topic", discussion.topic);
  app.post("/post", discussion.post);
  app.post("/comment", discussion.comment);
  // This will pull down EVERYTHING from the DB, all topics, posts, and comments - will be called upon loading the dashboard
  app.get("/dashboard", discussion.index);
}