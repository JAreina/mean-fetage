function subscribe(exito,fallo,siempre){
   
    let datos = "{'nombre':'juan'}";

    exito(datos);

    let error = "{'status':'400'},{'mensaje':\"ha habido error'}";

    fallo(error);

    siempre();
}

