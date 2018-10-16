var x = prompt("Enter a number?");
var arr=x.split("");
var string="";
	for(i=0;i<arr.length-1;i++)
	{
		if(arr[i]%2==0 && arr[i+1]%2==0)
			string+=arr[i]+ "-";
		else
			string+=arr[i];

	}
	string+=arr[arr.length-1];
	console.log(string);