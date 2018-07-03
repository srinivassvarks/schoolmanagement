'use strict'
var sqldb=require('../sql/sqldb/sqldb')
var Sequelize = require('sequelize')
var sequelize = sqldb.sequelize
var express = require('express')
var Q=require('q');


function insertloginDetails(req,res){
    
    var username=req.body.username;
    var password=req.body.password;

    var sql = 'INSERT INTO login (username, password)VALUES("'+username+'","'+password+'")';
    
    
 
    sequelize.query(sql, {type: sequelize.QueryTypes.INSERT})
  } 



  



function getloginDetail(req,res){
 let sql=`SELECT *FROM login`;
       
    sequelize.query(sql, { type: sequelize.QueryTypes.SELECT})
    .then(users => {
        let a=[];
        for(let i=0;i<users.length;i++)
              {
                  a.push({"name":users[i].username," pass":users[i].password})
              }
          
              res.send(a);
      
    })
  }
  
  
module.exports = {
    getloginDetail:getloginDetail,
    insertloginDetails:insertloginDetails,

        poolSize: 10000,
    poolIdleTimeout: 30000000
}