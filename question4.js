 function strDes(a, b) {
   if (a>b) return -1;
   else if (a<b) return 1;
   else return 0;
 }
var arr=["Banana","Apple","Kiwi","Orange","Guava"];
arr.sort();
console.log(arr);
arr.sort(strDes);
console.log(arr);