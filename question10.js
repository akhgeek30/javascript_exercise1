function grade(average)
{
	if(average>90 && average<=100)
		return 'A';
	else if(average>80 && average<=90)
		return 'B';
	else if(average>70 && average<=80)
		return 'C';
	else if(average>60 && average<=70)
		return 'D';
	else 
		return 'F';
}
var student = [{
name : "David",
marks:80},{
name : "Vinod",
marks:77},{
name : "Divya",
marks:88},{
name : "Ishita",
marks:95},{
name : "Thomas",
marks:68}];
var average=0;
for(i=0;i<student.length;i++)
{
	average+=student[i].marks;
}
console.log(average/student.length);
console.log(grade(average/student.length));
