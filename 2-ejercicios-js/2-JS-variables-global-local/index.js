
var local = "VARIABLE GLOBAL";


function  probarVariables(){
    console.log("1 "+local);
    variableGlobalSinVar = "es global al no estar declarada con var en una funcion"
}


function probarVariableComoParametros(local){
    console.log("2 "+variableGlobalSinVar);
    console.log("3 "+local)
}


//probarVariableComoParametros(local);  ERROR no ha sido creaeda variableGlobalSinVar
probarVariables();
probarVariableComoParametros(local);
probarVariableComoParametros(local);