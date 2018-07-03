'use strict'
var sqldb=require('../sql/sqldb/sqldb')
var Sequelize = require('sequelize')
var sequelize = sqldb.sequelize
var express = require('express')
var Q=require('q');


function insertsubjectDetails(req,res){
    var subjectname=req.body.subjectname;
    var cls=req.body.cls;
   



    var sql = 'INSERT INTO subj (subjectname,cls) VALUES("'+subjectname+'","'+cls+'")';
    
    
 
    sequelize.query(sql, {type: sequelize.QueryTypes.INSERT})
  } 



  



function getsubjectDetail(req,res){

       let sql=`SELECT *FROM subj`;
    sequelize.query(sql,{ type: sequelize.QueryTypes.SELECT})
    .then(users => {
        let a=[];
        for(let i=0;i<users.length;i++)
              {
                  a.push({"subjectname:":users[i].subjectname,"class":users[i].cls})
              }       
              res.send(a);
      
    })
  }
  

  function getsubjec(req,res){

    let sql=`SELECT sb.subjectname from subj sb LEFT JOIN stud_clss scls ON scls.cls=sb.cls`;
 sequelize.query(sql,{ type: sequelize.QueryTypes.SELECT})
 .then(users => {
     let a=[];
     for(let i=0;i<users.length;i++)
           {
               a.push({"subjectname:":users[i].subjectname})
           }       
           res.send(a);
   
 })
}

  
module.exports = {
    getsubjectDetail:getsubjectDetail,
    insertsubjectDetails:insertsubjectDetails,
    getsubjec:getsubjec,
        poolSize: 10000,
    poolIdleTimeout: 30000000
}