const Post = require('../models/post');

module.exports = (app) => {

    // CREATE
    app.post('/post/new', (req, res) => {
      console.log("HELLOOOOO")
      // INSTANTIATE INSTANCE OF POST MODEL
      const post = new Post(req.body);
  
      // SAVE INSTANCE OF POST MODEL TO DB
      post.save((err, post) => {
        // REDIRECT TO THE ROOT
        return res.redirect(`/`);
      })
    });

    app.get('/', (req, res)=>{
      //console.log(Post)
      //return res.json({"abc": "abc"})
      Post.find({})
      .then(posts => {
        console.log(posts)
        return res.render("posts-index", { posts:posts });
      })
      .catch(err => {
        console.log(err.message);
      });
      })    
    
    app.get("/posts/:id", function(req, res) {
        // LOOK UP THE POST
        Post.findById(req.params.id)
          .then(post => {
            res.render("posts-show", { post });
          })
          .catch(err => {
            console.log(err.message);
          });
      });
    // SUBREDDIT
    app.get("/n/:subreddit", function(req, res) {
      Post.find({ subreddit: req.params.subreddit })
      .then(posts => {
        res.render("posts-index", { posts });
      })
      .catch(err => {
        console.log(err);
      });    
    });        
  };

// module.exports = app => {
//     // CREATE
//     app.post("/posts/new", (req, res) => {
//       console.log(req.body);
//     });
//   };