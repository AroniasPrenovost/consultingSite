// masthead background color change functionality 
function chbg(color) {
	document.getElementById('b').style.backgroundColor = color;
}

// quote generator
var quotesArr1 = [];
quotesArr1[0] = '<span style="font-size:1.2em; color:white">\"CareerRefined took a very consultative approach with my job search. They patiently helped me overcome my interview anxiety with strong preparation and reminding me of all the positive attributes I had to offer.\"</span><br><span style="font-size:1.1em;line-height:1.2;margin-left:42.5%;">-Madison</span>';

// cycle through the quotes
// setInterval(displayDetails, 3500);  // now we have buttons 
function displayDetails1(){
	var randomQuote1 = Math.floor(Math.random() * (quotesArr1.length - 0));
	document.getElementById("quote").innerHTML = quotesArr1[randomQuote1];
	};
displayDetails1(); // sort of hacky but it's only a couple, right? 
	document.getElementById("displayDetails1").onclick = displayDetails1;

var quotesArr2 = [];
quotesArr2[0] = '<span style="font-size:1.2em; color:white">\"They walked me through the process of framing my resume to amplify my limited experience and showcase my strong points in a way employers would take notice to.\"</span><br><span style="font-size:1.1em;line-height:1.2;margin-left:42.5%;">-Daniel</span>';
// cycle through the quotes
// setInterval(displayDetails, 3500);  // now we have buttons 
function displayDetails2(){
	var randomQuote2 = Math.floor(Math.random() * (quotesArr2.length - 0));
	document.getElementById("quote").innerHTML = quotesArr2[randomQuote2];
	};
displayDetails2(); // sort of hacky but it's only a couple, right? 
	document.getElementById("displayDetails2").onclick = displayDetails2;

var quotesArr3 = [];
quotesArr3[0] = '<span style="font-size:1.2em; color:white">\"When I decided to finally go for the job I knew I always wanted, but didn’t go to school for, CareerRefined was the extra boost I needed and I couldn’t have been happier with the process.\"</span><br><span style="font-size:1.1em;line-height:1.2;margin-left:42.5%;">-Elizabeth</span>';
// cycle through the quotes
// setInterval(displayDetails, 3500);  // now we have buttons 
function displayDetails3(){
	var randomQuote3 = Math.floor(Math.random() * (quotesArr3.length - 0));
	document.getElementById("quote").innerHTML = quotesArr3[randomQuote3];
	};
displayDetails3(); // sort of hacky but it's only a couple, right? 
	document.getElementById("displayDetails3").onclick = displayDetails3;