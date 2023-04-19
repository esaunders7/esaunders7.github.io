function showHide(){
	let firstElem= document.getElementById("first");
	let linkElem= document.getElementById("show-Hide");
	
	if (firstElem.classList.contains("hidden")){
		firstElem.classList.remove("hidden");
		linkElem.innerHTML="See less...";
	}
	else{
		firstElem.classList.add("hidden");
		linkElem.innerHTML="See more...";
	}
}
function showHidden(){
	let secondElem=document.getElementById("second");
	let citeElem=document.getElementById("show-Hidden");
	
	if (secondElem.classList.contains("hidden")){
			secondElem.classList.remove("hidden");
			citeElem.innerHTML="See less...";
	}
	else{
		secondElem.classList.add("hidden");
		citeElem.innerHTML="See more...";
	}
	
}
function showResults(){
	let one=document.getElementById("txt-questionone").value;
	let two=document.getElementById("txt-questiontwo").value;
	let three=document.getElementById("txt-questionthree").value;
	let four=document.getElementById("txt-questionfour").value;
	let line1P=document.getElementById("line1");
	let line2P=document.getElementById("line2");
	let line3P=document.getElementById("line3");
	let line4P=document.getElementById("line4");
	let scoreP=document.getElementById("score");
	let sectionResult=document.getElementById("result");
	let total=0;
	
	
	if(one=="extracts a number from a string"){
		line1P.innerHTML="Question 1-Correct";
		total+=1;
	}
	else{
		line1P.innerHTML="Question 1-Incorrect";
	}

	if(two=="right"){
		line2P.innerHTML="Question 2-Correct";
		total+=1;
	}
	else{
		line2P.innerHTML="Question 2-Incorrect";
	}
	
	if(three=="when you are getting the text from in the text box"){
		line3P.innerHTML="Question 3-Correct";
		total+=1;
	}
	else{
		line3P.innerHTML="Question 3-Incorrect";
	}
	
	if(four=="it bolds the text"){
		line4P.innerHTML="Question 4-Correct";
		total+=1;
	}
	else{
		line4P.innerHTML="Question 4-Incorrect";
	}
	
	scoreP.innerHTML="Score:" + total;
	sectionResult.classList.remove("hidden");
}

setInterval(changeSlide, 1000);
function changeSlide(){
	let bigpicture=document.getElementById("bigpicture");
	let num=bigpicture.getAttribute("data-num");
	
	if(num==1){
		bigpicture.src="images/familyreal.jpg";
		bigpicture.setAttribute("data-num","2")
	}
	else if(num==2){
		bigpicture.src="images/friends.jpg";
		bigpicture.setAttribute("data-num","3")
	}
	else if(num==3){
		bigpicture.src="images/rush.jpg";
		bigpicture.setAttribute("data-num","4")
	}
	else{
		bigpicture.src="images/sorority.jpg";
		bigpicture.setAttribute("data-num","1");
	}
}