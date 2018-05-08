// Image source match in JS: https://stackoverflow.com/questions/25022660/explain-image-src-match-in-javascript
// Use JS to create elements in your HTML: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_img_create

var a = document.getElementById("recoome");
var b = document.getElementById("guldo");
var c = document.getElementById("ginyu");
var d = document.getElementById("jeice");
var e = document.getElementById("burter");
var f = document.getElementById("burter");
var song = document.getElementById("individual-pose");
var group = document.getElementById("group-pose");
var roses = document.getElementById("roses");

// initialize a variable to count and trigger the Ginyu Force group pose image
var x = 0;

function recoomePose(el){
	if (el.src.match("images/recoome/dbz1.png")){
		el.src = "images/recoome/dbz2.png";
	} else if (el.src.match("images/recoome/dbz2.png")){
		el.src = "images/recoome/dbz3.png";
	} else if (el.src.match("images/recoome/dbz3.png")){
		el.src = "images/recoome/dbz4.png";
		el.classList.add("no-cursor");
		song.play();
		x++;
		// check the value of x using "inspect"
		console.log(x);
		// run the function that checks to see if all members have reached their final pose
		weAreTheGinyuForce();
	} else {
		//do nothing after the final pose is shown
	}
}

function guldoPose(el){
	if (el.src.match("images/guldo/dbz13.png")){
		el.src = "images/guldo/dbz14.png";
	} else if (el.src.match("images/guldo/dbz14.png")){
		el.src = "images/guldo/dbz15.png";
	} else if (el.src.match("images/guldo/dbz15.png")){
		el.src = "images/guldo/dbz16.png";
		el.classList.add("no-cursor");
		song.play();
		x++;
		// check the value of x using "inspect"
		console.log(x);
		// run the function that checks to see if all members have reached their final pose
		weAreTheGinyuForce();
	} else {
		//do nothing after the final pose is shown
	}
}

function ginyuPose(el){
	if (el.src.match("images/ginyu/dbz17.png")){
		el.src = "images/ginyu/dbz18.png";
	} else if (el.src.match("images/ginyu/dbz18.png")){
		el.src = "images/ginyu/dbz19.png";
	} else if (el.src.match("images/ginyu/dbz19.png")){
		el.src = "images/ginyu/dbz20.png";
		el.classList.add("no-cursor");
		song.play();
		x++;
		// check the value of x using "inspect"
		console.log(x);
		// run the function that checks to see if all members have reached their final pose
		weAreTheGinyuForce();
	} else {
		//do nothing after the final pose is shown
	}
}

function jeicePose(el){
	if (el.src.match("images/jeice/dbz9.png")){
		el.src = "images/jeice/dbz10.png";
	} else if (el.src.match("images/jeice/dbz10.png")){
		el.src = "images/jeice/dbz11.png";
	} else if (el.src.match("images/jeice/dbz11.png")){
		el.src = "images/jeice/dbz12.png";
		el.classList.add("no-cursor");
		song.play();
		x++;
		// check the value of x using "inspect"
		console.log(x);
		// run the function that checks to see if all members have reached their final pose
		weAreTheGinyuForce();
	} else {
		//do nothing after the final pose is shown
	}
}

function burterPose(el){
	if (el.src.match("images/burter/dbz5.png")){
		el.src = "images/burter/dbz6.png";
	} else if (el.src.match("images/burter/dbz6.png")){
		el.src = "images/burter/dbz7.png";
	} else if (el.src.match("images/burter/dbz7.png")){
		el.src = "images/burter/dbz8.png";
		el.classList.add("no-cursor");
		song.play();	
		x++;
		// check the value of x using "inspect"
		console.log(x);
		// run the function that checks to see if all members have reached their final pose
		weAreTheGinyuForce();
	} else {
		//do nothing after the final pose is shown
	}
}

function weAreTheGinyuForce(el){
	if (x == 5){
		a.classList.add("opaque");
		b.classList.add("opaque");
		c.classList.add("opaque");
		d.classList.add("opaque");
		e.classList.add("opaque");
		setTimeout(addImgElement, 1000);
		group.play();
	} else {
		// do nothing until all 5 Ginyu Force members have reached their final pose
	}
}


function friezaReaction(el) {
	document.getElementById("iamlordfrieza").classList.add("slide","no-cursor");
	entrance.play()
}

function addImgElement() { 
	// create a new img element 
	var newImg = document.createElement("IMG"); 
	// and give it some content 
	newImg.setAttribute("src", "images/dbz21.png");
	// add an 'id' to your new image
	newImg.setAttribute("id", "ginyu-force-roses");

	// add the img to your HTML
	document.getElementById("insert-img-here").appendChild(newImg);
	// add the 'max-img' class to restric the image size
	newImg.classList.add("max-img");

	// add an 'onclick' function in the HTML
	newImg.onclick = function(){
		document.getElementById("ginyu-force-roses").classList.add("roses", "no-cursor");
		roses.play();
		setTimeout(friezaReaction, 3000);
	}
}
