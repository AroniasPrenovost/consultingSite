// masthead background color change functionality 
function chbg(color) {
	document.getElementById('b').style.backgroundColor = color;
}

// quote generator
var quotesArr1 = [];
quotesArr1[0] = '<span style="font-size:3.3em">We find Compatibility.</span> <br> <span style="font-size:1.0em; color:white">I asked Chris if he could make hair after finishing and he was happy to oblige.  He truly takes his time to make sure everything is perfect.</span>';

// cycle through the quotes
// setInterval(displayDetails, 3500);  // now we have buttons 
function displayDetails1(){
	var randomQuote1 = Math.floor(Math.random() * (quotesArr1.length - 0));
	document.getElementById("quote").innerHTML = quotesArr1[randomQuote1];
	};
displayDetails1(); // sort of hacky but it's only a couple, right? 
	document.getElementById("displayDetails1").onclick = displayDetails1;

var quotesArr2 = [];
quotesArr2[0] = '<span style="font-size:3.3em">We help clients.</span> <br> <span style="font-size:1.0em; color:white">I asked Chris if he could make hair after finishing and he was happy to oblige.  He truly takes his time to make sure everything is perfect.</span>';
// cycle through the quotes
// setInterval(displayDetails, 3500);  // now we have buttons 
function displayDetails2(){
	var randomQuote2 = Math.floor(Math.random() * (quotesArr2.length - 0));
	document.getElementById("quote").innerHTML = quotesArr2[randomQuote2];
	};
displayDetails2(); // sort of hacky but it's only a couple, right? 
	document.getElementById("displayDetails2").onclick = displayDetails2;

var quotesArr3 = [];
quotesArr3[0] = '<span style="font-size:3.3em">We understand goals.</span> <br> <span style="font-size:1.0em; color:white">I asked Chris if he could make hair after finishing and he was happy to oblige.  He truly takes his time to make sure everything is perfect.</span>';
// cycle through the quotes
// setInterval(displayDetails, 3500);  // now we have buttons 
function displayDetails3(){
	var randomQuote3 = Math.floor(Math.random() * (quotesArr3.length - 0));
	document.getElementById("quote").innerHTML = quotesArr3[randomQuote3];
	};
displayDetails3(); // sort of hacky but it's only a couple, right? 
	document.getElementById("displayDetails3").onclick = displayDetails3;