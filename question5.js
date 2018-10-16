var array=prompt("Enter");
var newArray=array.split(" ");
var final=[];
var j=0;
for(i=0;i<newArray.length;i++)
{
	if(!final.includes(newArray[i]))
		final[j++]=newArray[i];
}
console.log(final);