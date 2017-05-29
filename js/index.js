// masthead background color change functionality 
function chbg(color) {
	document.getElementById('b').style.backgroundColor = color;
}
// quote generator
var quotesArr = [];
quotesArr[0] = '<span style="font-size:3.3em">We find Compatibility.</span> <br> <span style="font-size:1.0em">I asked Chris if he could make hair after finishing and he was happy to oblige.  He truly takes his time to make sure everything is perfect.</span>';
quotesArr[1] = '<span style="font-size:3.3em">We help clients.</span> <br> <span style="font-size:1.0em">I asked Chris if he could make hair after finishing and he was happy to oblige.  He truly takes his time to make sure everything is perfect.</span>';
quotesArr[2] = '<span style="font-size:3.3em">We understand goals.</span> <br> <span style="font-size:1.0em">I asked Chris if he could make hair after finishing and he was happy to oblige.  He truly takes his time to make sure everything is perfect.</span>';
// cycle through the quotes
// setInterval(displayDetails, 3500);  // now we have buttons 
function displayDetails(){
	var randomQuote = Math.floor(Math.random() * (quotesArr.length - 0));
	document.getElementById("quote").innerHTML = quotesArr[randomQuote];
	};
displayDetails(); // sort of hacky but it's only a couple, right? 
	document.getElementById("displayDetails").onclick = displayDetails;
	document.getElementById("displayDetail").onclick = displayDetails;
	document.getElementById("displayDetai").onclick = displayDetails;


