'use strict'
var sqldb=require('../sql/sqldb/sqldb')
var Sequelize = require('sequelize')
var sequelize = sqldb.sequelize
var express = require('express')
var Q=require('q');


function insertstudclssDetails(req,res){
    var cls=req.body.cls;
   



    var sql = 'INSERT INTO stud_clss(cls) VALUES("'+cls+'")';
    
    
 
    sequelize.query(sql, {type: sequelize.QueryTypes.INSERT})
  } 



  



function getstudclssDetail(req,res){

       let sql=`SELECT *FROM stud_clss`;
    sequelize.query(sql,{ type: sequelize.QueryTypes.SELECT})
    .then(users => {
        let a=[];
        for(let i=0;i<users.length;i++)
              {
                  a.push({"class":users[i].cls})
              }       
              res.send(a);
      
    })
  }
  

  
module.exports = {
    getstudclssDetail:getstudclssDetail,
    insertstudclssDetails:insertstudclssDetails,

        poolSize: 10000,
    poolIdleTimeout: 30000000
}