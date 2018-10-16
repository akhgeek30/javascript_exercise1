
var d = new Date();
var month=d.getMonth()+1;
var date=d.getDate();
var year=d.getFullYear();
var hour=d.getHours();
var minutes=d.getMinutes();
var result=month+"/"+date+"/"+year + " " + hour + ":" + minutes;
console.log(result);
