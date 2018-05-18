
function peticion() {
    let x = new XMLHttpRequest();

     x.onreadystatechange= function () {

        if(this.readyState== 1) console.log("preparado 1")
        if(this.readyState== 2) console.log("preparado 2")
        if(this.readyState== 3) console.log("preparado 3")



        // x.responseXML   la respuesta es un xml
        // x.responseText   la respuesta es el body
        // x.status codigo de estado de la peticion

         if(this.readyState == 4 && this.status == 200){


            var json = JSON.parse(this.responseText);
            console.log(json);


             let salida = '';
            for(var i =0;i< json.length; i++){
                salida +=`
                ID : ${json[i]._id}
                NOMBRE: ${json[i].name}
                COLOR OJOS: ${json[i].eyeColor}
                ETIQUETAS : \n
                `;
                json[i].tags.forEach((element,INDEX) => {
                        salida += `${INDEX} : ${element}\n`;
                });

            }
             document.getElementById("demo").innerHTML = salida;
         }
     }


    //  METODO , URL , ASINC/SINCR   false = sincrono; true= asincrono
    x.open("post","texto.json",true);

    // body
     x.send();


}

