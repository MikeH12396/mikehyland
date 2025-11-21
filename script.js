function count(){
	var subjects=parseInt(prompt("Please enter the amount of subjects you took"));
	var sum=0;
	var avg=0;

	for(i=0;i<subjects;i++){
		var results=parseInt(prompt("Please enter the grade for subject: "+(i+1)));
		sum=sum+results;	
	}
	document.getElementById("main").innerHTML="Your overall result is: "+sum+" <br />";
}