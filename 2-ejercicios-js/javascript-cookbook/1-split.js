var sentence = 'This is one sentence. This is a sentence with a list of items:' +
'cherries, oranges, apples, bananas. That was the list of items.';
var start = sentence.indexOf(':');
var end = sentence.indexOf('.', start+1);
var listStr = sentence.substring(start+1, end);

var fruits = listStr.split(',');
var fruits = listStr.split(/\s*,\s*/);

fruits.forEach(function(elmnt,indx,arry) {
    arry[indx] = elmnt.trim()+"MODIFICADO";
    });
console.log(fruits); // ['cherries', ' oranges', ' apples', ' bananas']