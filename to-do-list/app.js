const express = require("express");
const path = require("path");
const hbs = require("hbs");
const bodyparser = require("body-parser"); //to accept data using form
const validate = require("./utils/login");
const bodyParser = require("body-parser");

const app = express();
const port=process.env.PORT || 3000

const viewDirectory = path.join(__dirname, "/template/views");
const partialDirectory = path.join(__dirname, "/template/partial");
const PublicDirectoryPath = path.join(__dirname, "/public");

app.set("view engine", "hbs");
app.set("views", viewDirectory);
hbs.registerPartials(partialDirectory);

app.use(express.static(PublicDirectoryPath));
app.use(bodyparser.urlencoded({ extended: false }));

app.get("", (req, res) => {
  res.render("index");
});

app.get("/login",(req,res)=>{
  validate.display((data)=>{
    res.render('login',{datax:data})
  })
})

app.post("/login", (req, res) => {
  var email = req.body.email;
  var pass = req.body.pass;
  validate.validation(email, pass, (err) => {
    if (err == undefined) {
      validate.display((data) => {
        res.render("login", { datax: data });
      });
    } else {
      console.log(err)
      res.send(err);
    }
  });
});

app.post("/addnote", (req, res) => {
  var title = req.body.title;
  var des = req.body.description;
  validate.addnote(title, des, (data) => {
    res.redirect('/login')
  });
});

app.post('/deletenote',(req,res)=>{
  var a=req.body.delete  
  validate.deletenote(a,(data)=>{
    res.render('login',{datax:data})

  })                      
})

app.listen(port, () => {
  console.log("server listening on port",port);
});
