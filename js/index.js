// quote generator
var quotesArr = [];
quotesArr[0] = '<span style="font-size:3.3em">We find Compatibility.</span> <br> <span style="font-size:1.0em">I asked Chris if he could make hair after finishing and he was happy to oblige.  He truly takes his time to make sure everything is perfect.</span>';
quotesArr[1] = '<span style="font-size:3.3em">We help clients.</span> <br> <span style="font-size:1.0em">I asked Chris if he could make hair after finishing and he was happy to oblige.  He truly takes his time to make sure everything is perfect.</span>';
quotesArr[2] = '<span style="font-size:3.3em">We understand goals.</span> <br> <span style="font-size:1.0em">I asked Chris if he could make hair after finishing and he was happy to oblige.  He truly takes his time to make sure everything is perfect.</span>';
quotesArr[3] = '<span style="font-size:3.3em">We get it.</span> <br> <span style="font-size:1.0em">I asked Chris if he could make hair after finishing and he was happy to oblige.  He truly takes his time to make sure everything is perfect.</span>';
quotesArr[4] = '<span style="font-size:3.3em">We\'re you\'re partner.</span> <br> <span style="font-size:1.0em">I asked Chris if he could make hair after finishing and he was happy to oblige.  He truly takes his time to make sure everything is perfect.</span>';
quotesArr[5] = '<span style="font-style:italic" "font-size:20px">"I got a fantastic haircut. I have very thick difficult hair that stands nearly straight out, and needs to be "sculpted" more than trimmed lol. Chris could easily charge twice as much for a haircut here (certainly all the others shops do!).</span>" <br><br> - M.N. - <br> Everett, WA';
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

