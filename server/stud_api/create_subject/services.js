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

    let cls=req.body.cls;
      console.log(cls);
    let sql=`select subjectname from subj where cls=:cls`;
    sequelize.query(sql,{replacements: {
        cls:cls
    }, type: sequelize.QueryTypes.SELECT})
    .then(users => {
        let a=[];
        for(let i=0;i<users.length;i++)
              {
                  a.push({"subjectname:":users[i].subjectname})
              }       
              res.send(a);
      
    })
}

function deletsubjec(req,res){

    let cls=req.body.cls;
      console.log(cls);
    let sql=`delete *from subj where cls=:cls`;
    sequelize.query(sql,{replacements: {
        cls:cls
    },type: sequelize.QueryTypes.DELETE})
    .then(users => {
              
        res.send("Number of records deleted: " + users.affectedRows);
    })
}

  
module.exports = {
    getsubjectDetail:getsubjectDetail,
    insertsubjectDetails:insertsubjectDetails,
    deletsubjec:deletsubjec,
    getsubjec:getsubjec,
        poolSize: 10000,
    poolIdleTimeout: 30000000
}