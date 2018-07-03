
function errGereric(error, res){

    if(error.parent.errno == 1146){
        res.json({
            data:"ERROR_1", 
            errorNro:error.parent.errno,
            messageError:error.message,
            sqlError:error.sql,
            status: 0
        })
    } else if (error.parent.errno == 1054){
        res.json({
            data:"Error al consultar campo", 
            errorNro:error.parent.errno,
            messageError:error.message,
            sqlError:error.sql,
            status: 0
        })
    } else {
        res.json({
            data:"Error desconocido", 
            errorNro:error.parent.errno,
            messageError:error.message,
            queryError:error.sql,
            status: 0
        })
    }
}


module.exports= {
    errGereric:errGereric,
    poolSize: 10000,
    poolIdleTimeout: 30000000
}