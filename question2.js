var arrayOfNumbers=[97,35,54,94,91];
var arrayOfNumbersLength=arrayOfNumbers.length;
var max=arrayOfNumbers[0];
for(i=1;i<arrayOfNumbersLength;i++)
	if(max<arrayOfNumbers[i])
		max=arrayOfNumbers[i];
console.log(max);
