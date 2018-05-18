
  var arr = [];


function add(){
    var ele = document.getElementById('elemento').value;
   arr.push(ele);
   console.log("aññadido "+ele)
   console.log(arr)

}


function mostrar(){
      var contenedor = document.getElementById("demo");
       contenedor.innerHTML="";

    for(var i =0;i<arr.length;i++){
        console.log(arr[i]);
        contenedor.innerHTML +=`<p>   ${arr[i]} </p>`;
    }
    
}


