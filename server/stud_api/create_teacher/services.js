'use strict'
var sqldb=require('../sql/sqldb/sqldb')
var Sequelize = require('sequelize')
var sequelize = sqldb.sequelize
var express = require('express')
var Q=require('q');


function insertteacherDetails(req,res){
    var tid=req.body.tid;
    var tname=req.body.tname;
    var dob=req.body.dob;
    var address=req.body.address;
    var prsntadd=req.body.prsntadd;
    var mobile=req.body.mobile;
    var amob=req.body.amob;
    var subjid=req.body.subjid;


    var sql = 'INSERT INTO teacher (tid,tname,dob,address,prsntadd,mobile,amob,subjid) VALUES("'+tid+'","'+tname+'","'+dob+'","'+address+'","'+prsntadd+'","'+mobile+'","'+amob+'","'+subjid+'")';
        
    sequelize.query(sql, {type: sequelize.QueryTypes.INSERT})
  } 



  



function getteacherDetail(req,res){
      
       let sql=`SELECT *FROM teacher`;
    sequelize.query(sql,{type: sequelize.QueryTypes.SELECT})
    .then(users => {
        let a=[];
        for(let i=0;i<users.length;i++)
              {
                  a.push({"Teacher id:":users[i].tid,"Teacher Name":users[i].tname,"DOB":users[i].dob,"Address":users[i].address,"Present Address":users[i].prsntadd,"mobile":users[i].mobile,"Alternative Mobile":users[i].amob,"Subject Handling ":users[i].subjid})
              }       
              res.send(a);
      
    })
  }

  function removeteacherDetail(req,res){

    let tid=req.body.tid;
      
    let sql=`delete from teacher where tid=:tid`;
    sequelize.query(sql,{replacements: { tid:tid}, type: sequelize.QueryTypes.DELETE})
}

  
  
  module.exports = {
    insertteacherDetails:insertteacherDetails,
    getteacherDetail:getteacherDetail,
    removeteacherDetail:removeteacherDetail,
        poolSize: 10000,
    poolIdleTimeout: 30000000
}