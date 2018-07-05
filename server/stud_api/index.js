var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
// Simulation Configurations

var results_services = require('../stud_api/login/service');

app.get('/getloginDetails', results_services.getloginDetail);
app.post('/insertloginDetails',results_services.insertloginDetails);

var std_services=require('../stud_api/create_student/services');

app.get("/getstudentDetails",std_services.getstudentDetail);
app.post('/insertstudentDetails',std_services.insertstudentDetails);

var sub_services=require('../stud_api/create_subject/services');

app.get("/getsubjectDetails",sub_services.getsubjectDetail);
app.post('/insertsubjectDetails',sub_services.insertsubjectDetails);
app.post('/getsubject',sub_services.getsubjec);
app.post('/deletsubject',sub_services.deletsubjec);



var studclss_services=require('../stud_api/create_class/services');

app.get("/getstudclssDetail",studclss_services.getstudclssDetail);
app.post('/insertstudclssDetails',studclss_services.insertstudclssDetails);


var teacher_services=require('../stud_api/create_teacher/services');

app.get("/getteacherDetail",teacher_services.getteacherDetail);
app.post('/insertteacherDetails',teacher_services.insertteacherDetails);
app.post('/removeteacherDetail',teacher_services.removeteacherDetail);
app.post("/getteacher_handlingdetail",teacher_services.getteacher_handlingdetail);
app.post("/downloadteacher_handlingdetail",teacher_services.downloadteacher_handlingdetail);
console.log("server running on 9000 port")

app.listen(9000);