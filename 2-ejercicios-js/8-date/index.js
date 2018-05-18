function calcularDiferenciaFechas() {
    var fecha = new Date(document.getElementById('anio').value,
                          document.getElementById('mes').value,
                          document.getElementById('dia').value);
    var fecha2 = new Date(document.getElementById('anio2').value,
                          document.getElementById('mes2').value,
                          document.getElementById('dia2').value);
   console.log(fecha2,fecha)
    return fecha > fecha2 
             ? document.getElementById('demo').innerHTML=(fecha-fecha2)/1000
             : document.getElementById('demo').innerHTML=(fecha2-fecha)/1000;
}