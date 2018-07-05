'use strict'
var sqldb=require('../sql/sqldb/sqldb')
var Sequelize = require('sequelize')
var sequelize = sqldb.sequelize
var express = require('express')
var Q=require('q');
var csv = require('csv-express');

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
   
         let tid=req.body.tid;
      
    let sql=`select tname from teacher where tid=:tid`;
    sequelize.query(sql,{replacements:{tid:tid},type: sequelize.QueryTypes.SELECT})
    .then(users => {
        let a=[];
        for(let i=0;i<users.length;i++)
              {
                  a.push({"teacher name:":users[i].tname})
              }       
              res.send(a);
      
    })
  }

  function removeteacherDetail(req,res){

    let tid=req.body.tid;
      
    let sql=`delete from teacher where tid=:tid`;
    sequelize.query(sql,{replacements: { tid:tid}, type: sequelize.QueryTypes.DELETE})
}

function getteacher_handlingdetail(req,res){
   
    let tid=req.body.tid;
 
let sql=`select t.tid,t.tname,s.subjid,s.subjectname,c.cls_id,c.cls from subj s left join teacher t on t.subjid=s.subjid left join stud_clss c on c.cls_id=s.cls_id where t.tid=:tid`;
sequelize.query(sql,{replacements: { tid:tid },type: sequelize.QueryTypes.SELECT})
.then(users => {
   let a=[];
   for(let i=0;i<users.length;i++)
         {
             a.push({"teacher ID:":users[i].tid,"teacher name":users[i].tname,"subject id":users[i].subjid,"subject name":users[i].subjectname,"Class Id":users[i].cls_id,"class":users[i].cls})
         }       
         res.send(a);
 
})
}
 
function downloadteacher_handlingdetail(req,res){
   
    let tid=req.body.tid;
let sql=`select t.tid,t.tname,s.subjid,s.subjectname,c.cls_id,c.cls from subj s left join teacher t on t.subjid=s.subjid left join stud_clss c on c.cls_id=s.cls_id where t.tid=:tid`;
sequelize.query(sql,{replacements: { tid:tid },type: sequelize.QueryTypes.SELECT})
.then(users => {
    res.attachment('crosslistFormatFile.csv');
            res.charset="ISO-8859-1"
            csv.separator=';'
   let a=[];
   for(let i=0;i<users.length;i++)
         {
             a.push({"teacher ID:":users[i].tid,"teacher name":users[i].tname,"subject id":users[i].subjid,"subject name":users[i].subjectname,"Class Id":users[i].cls_id,"class":users[i].cls})
         }       
         res.csv(a,true);
         
 
})
}


  module.exports = {
    insertteacherDetails:insertteacherDetails,
    getteacherDetail:getteacherDetail,
    getteacher_handlingdetail:getteacher_handlingdetail,
    removeteacherDetail:removeteacherDetail,
    downloadteacher_handlingdetail:downloadteacher_handlingdetail,
        poolSize: 10000,
    poolIdleTimeout: 30000000
}