'use strict';
var express = require('express');
const Sequelize = require('sequelize');


module.exports.sequelize= new Sequelize('studdb', 'root', 'sa', {
        host: 'localhost',
        dialect: 'mysql',
        operatorsAliases: false,
      
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        },
      
      });