const express=require("express");
const pool=require("../pool.js");

var router=express.Router();

router.get("/v1/login/:uname-:upwd",(req,res)=>{
  var _uname=req.params.uname;
  var _upwd=req.params.upwd;
  sql="SELECT * from users where uname=? AND upwd=?"
  pool.query(sql,[_uname,_upwd],(err,result)=>{
    if(err)  throw err;
	console.log(result);
	if(result.length>0){
	  res.send("1");
	}else{
	  res.send("0");
	}
  });
});

router.post("/v1/reg",(req,res)=>{
    var obj=req.body;
     var sql="insert into users set ?";
  pool.query(sql,[obj],(err,result)=>{
    if(err) throw err;
    console.log(result);
   if(result.affectedRows>0){
       res.send("1");
   }else{
       res.send("0");
   }
  });

});

module.exports=router;