'use strict'
var sqldb=require('../sql/sqldb/sqldb')
var Sequelize = require('sequelize')
var sequelize = sqldb.sequelize
var express = require('express')
var Q=require('q');


function insertstudentDetails(req,res){
    var sid=req.body.sid;
    var name=req.body.name;
    var dob=req.body.dob;
    var cls=req.body.cls;
    var fname=req.body.fname;
    var mname=req.body.mname;
    var addrss=req.body.addrss;
    var prsntadd=req.body.prsntadd;
    var gender=req.body.gender;
    var mobile=req.body.mobile;
    var amobile=req.body.amobile;



    var sql = 'INSERT INTO student (sid,name, dob,cls,fname,mname,addrss,prsntadd,gender,mobile,amobile)VALUES("'+sid+'","'+name+'","'+dob+'","'+cls+'","'+fname+'","'+mname+'","'+addrss+'","'+prsntadd+'","'+gender+'","'+mobile+'","'+amobile+'")';
    
    
 
    sequelize.query(sql, {type: sequelize.QueryTypes.INSERT})
  } 



  



function getstudentDetail(req,res){

       let sql=`SELECT *FROM student`;
    sequelize.query(sql, { type: sequelize.QueryTypes.SELECT})
    .then(users => {
        let a=[];
        for(let i=0;i<users.length;i++)
              {
                  a.push({"sid:":users[i].sid,"name":users[i].name," dob":users[i].dob,"class":users[i].cls,"fname":users[i].fname,"mname":users[i].mname,"address":users[i].addrss,"paddress":users[i].prsntadd,"gender":users[i].gender,"mobile":users[i].mobile,"amboile":users[i].amobile})
              }
          
              res.send(a);
      
    })
  }
  
  
module.exports = {
    getstudentDetail:getstudentDetail,
    insertstudentDetails:insertstudentDetails,

        poolSize: 10000,
    poolIdleTimeout: 30000000
}