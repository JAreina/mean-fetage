function hallarMaximo(arr){
    return new Promise(
        function ( resolve, reject){
            let max =0;
            let mayor=0;

             if(!arr || arr.length == 0){
                 reject("array vacio");
                 return;
             }

            let  elemento;
            try{
                for(let i=0; i<arr.length;i++){
                   
                    if(typeof arr[i] == 'string'){
                          elemento = arr[i].charCodeAt(0)
                          //console.log(elemento)
                    }
                    if(typeof arr[i] == "number"){
                        elemento = arr[i];

                    }
                      

                    if( elemento>max){
                         mayor = elemento;
                         max = elemento;
                    }
               }
               resolve(mayor)
            }catch(e){
                reject(e)
            }
            
        }
    )
}

//let arr= [44,44,"a588aa55",666,777];
let arr = ['a','c','p','u']
//let arr =[]
let maxi = hallarMaximo(arr);

maxi.then(function(a){
    console.log(a);
}).catch(function(b){
    console.log(b)
    console.log("ha ocurrido un error")
});