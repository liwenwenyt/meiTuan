const path = require("path");
const express = require("express");
const app = express();
const listgoods = require("./mocks/listgoods.json");
const mttwolevelpageGettoshop = require("./mocks/mtTwolevelpageGettoshop.json");
const product=require("./mocks/product.json");
const footLists=require("./mocks/footLists.json");
const list = require("./mocks/panel.json");
const minelist = require("./mocks/minelist.json");
app.use(express.static(path.resolve(__dirname)));

app.use("/api/listgoods",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  res.json(listgoods)
});

app.use("/api/mttwolevelpageGettoshop",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  res.json(mttwolevelpageGettoshop)
});

app.use("/api/product",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  res.json(product);
})
app.use("/api/footLists",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  res.json(footLists);
})

app.use("/api/panel",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  res.json(list)
})

app.use("/api/minelist",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  res.json(minelist)
})




app.use("/",(req,res)=>{
    res.sendFile(path.resolve(__filename,"index.html"))
});

app.use("/levelpage",(req,res)=>{
  res.sendFile(path.resolve(__filename,"index.html"))
});

app.use("/shopcarts",(req,res)=>{
  res.sendFile(path.resolve(__filename,"index.html"))
})

app.use("/discover",(req,res)=>{
  res.sendFile(path.resolve(__filename,"index.html"))
})

app.use("/nearby",(req,res)=>{
  res.sendFile(path.resolve(__filename,"index.html"))
})


app.listen(3000,()=>{
    console.log("server is ready on port 3000")
});


