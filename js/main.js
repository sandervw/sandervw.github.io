function hideSection() {
	document.getElementById('home').style.display = "none";
	document.getElementById('genEd').style.display = "none";
	document.getElementById('priorWork').style.display = "none";
	document.getElementById('intern').style.display = "none";
	document.getElementById('seniorDesign').style.display = "none";
	document.getElementById('resume').style.display = "none";
	document.getElementById('reflection').style.display = "none";
}


$(document).ready(function(){

	
	////////////////////////BUTTON FUNCTIONS////////////////////////
	
	$("#homeBtn").click(function(){
		hideSections();
		document.getElementById('home').style.display = "block";
	});
	
	$("#genEdBtn").click(function(){
		hideSections();
		document.getElementById('genEd').style.display = "block";
	});
	
	$("#priorWorkBtn").click(function(){
		hideSections();
		document.getElementById('priorWork').style.display = "block";
	});
	
	$("#internBtn").click(function(){
		hideSections();
		document.getElementById('intern').style.display = "block";
	});
	
	$("#seniorDesignBtn").click(function(){
		hideSections();
		document.getElementById('seniorDesign').style.display = "block";
	});
	
	$("#resumeBtn").click(function(){
		hideSections();
		document.getElementById('resume').style.display = "block";
	});
	
	$("#reflectionBtn").click(function(){
		hideSections();
		document.getElementById('reflection').style.display = "block";
	});
	
});
