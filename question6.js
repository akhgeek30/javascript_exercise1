var arr1 = [];
var arr2 = [];
var input = prompt("Enter Array 1");
arr1 = input.split(" ");
input = prompt("Enter Array 2");
arr2 = input.split(" ");
var arr3=[];
var bool1=[];
var bool2=[];
var i;
for(i=0;i<arr1.length;i++)
{
	bool1[arr1[i]]=1;
}
for(i=0;i<arr2.length;i++)
{
	bool2[arr2[i]]=1;
}

for(i=0;i<arr1.length;i++)
{
	if(bool2[arr1[i]]!=1)
		arr3.push(arr1[i]);
}

for(i=0;i<arr2.length;i++)
{
	if(bool1[arr2[i]]!=1)
		arr3.push(arr2[i]);
}
console.log(arr1);
console.log(arr2);
console.log(arr3);