const express = require("express");
const app=express();

app.use(logger);


const checkPermission = (req, res, next) => {
    console.log(`hello`)
}



app.get("/books",(req, res) => {
console.log("books")

return res.send({route: "/books"})
});

app.get("/libraries",checkPermission,(req, res) => {
    console.log("libraries")
    
    return res.send({route: "/libraries",permission:"true"})
    });

app.get("/authors",checkPermission,(req, res) => {
        console.log("authors")
        
        return res.send({route: "/authors",permission:"true"})
  });


  function logger(req, res, next){
      console.log("route handle logger")
      next();
  }

  app.listen(5000, () => {
      console.log("listen on port 5000")
  })