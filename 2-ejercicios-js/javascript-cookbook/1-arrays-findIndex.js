var nums = [2, 4, 19, 15, 183, 633, 7, 1, 1];
 var suma=0;
var over = nums.findIndex(function(element,index) {
    console.log(element + " index "+index);
    if(element == 1){
        suma += element;
    }

});
console.log(suma)
