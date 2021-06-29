function fun1()
{	
	var today = new Date();
	var d2 = today.getDate();
	var m2 =today.getMonth()+1;
	var y2 = today.getFullYear();
	var d1=document.getElementById("d").value;
	var m1=document.getElementById("m").value;
	var y1=document.getElementById("y").value;
	document.getElementById("dell").innerHTML=d1+"/"+m1+"/"+y1;
	// alert(d1+" "+m1+" "+y1);
	if(y2-y1>=19){
	//	document.write("You are above 18");
	document.getElementById("demo").innerHTML="You are above 18 eligable for vote";
	}
	else if(y2-y1<=17){
		document.getElementById("demo").innerHTML="You are below 18 not eligable for vote";
		//document.write("you are below 18");
	}
    else if(y2-y1==18 && m2-m1==12){
		document.getElementById("demo").innerHTML="You are above 18 and elegible for vote";
       // document.write("you are avobe 18");  
	  }
}