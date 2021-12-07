const validator = require("validator");
const fs=require('fs');
const { json } = require("body-parser");
const bodyParser = require("body-parser");

const validation = (email, pass, callback) => {
  var err = {};
  if (validator.isEmpty(email)) {
    if (validator.isEmpty(pass)) {
      err["PassError"] = true;
      err["PassErrorType"] = "Please enter password";
    }
    err["EmailError"] = true;
    err["EmailErrorType"] = "Please enter email address";
    callback(err);
  } 
  else {
    if (validator.isEmpty(pass)) {
      err["PassError"] = true;
      err["PassErrorType"] = "Please enter password";
      callback(err);
    }
     else {
      if (validator.isEmail(email)) {
        if (email == "pandeyaayush81@gmail.com") {
          if (pass == "1234") {
            callback(undefined);
          } else {
            err["PassError"] = true;
            err["PassErrorType"] = "Invalid password";
            callback(err);
          }
        } else {
          err["EmailError"] = true;
          err["EmailErrorType"] = "Invalid Email";
          callback(err);
        }
      } else {
        err["EmailError"] = true;
        err["EmailErrorType"] = "Please enter valid email address";
        callback(err);
      }
    }
  }
}

const addnote=(title,description,callback)=>{
  display((data)=>{
    id=data.length
    data.push({
      id:id+1,
      title:title
    })
    var dataString=JSON.stringify(data)
    fs.writeFileSync('note.json',dataString)
    callback(data)
  })
  
}

const display=(callback)=>{
  try{
    var dataJSON=fs.readFileSync('note.json')
    var dataString=dataJSON.toString()
    var data=JSON.parse(dataString)
    callback(data)
  }
  catch(e){
    callback([])

  }
}

const deletenote=(noteId,callback)=>{
  display((data)=>{
    for(var i=0;i<data.length;i++)
    {
      if(data[i].id==noteId)
      {
        data.splice(i,1)
        break
      }
    
    }
   var dataString=JSON.stringify(data)
   fs.writeFileSync('note.json',dataString)
   callback(data)

  })
}

module.exports = {
    validation:validation,
    addnote:addnote,
    display:display,
    deletenote:deletenote
};

