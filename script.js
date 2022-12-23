function themeChange() {
	var element = document.getElementById("mode");
	const initialText = 'Light'
	document.body.classList.toggle("light");

	if (element.innerHTML == "Light") {
		document.body.style.backgroundImage = "url('assets/misc/light.png')";
		element.textContent = 'Dark';
	} else {
		element.textContent = initialText;
		document.body.style.backgroundImage = "url('assets/misc/dark.png')";
	}

	var image = document.querySelectorAll("#github, #twitter, #discord, #java, #html5, #css3, #c, #python");

	if (image[0].src.match("assets/imgs/github.svg")) {
		image[0].src = "assets/imgsLight/github.svg";
		image[1].src = "assets/imgsLight/twitter.svg";
		image[2].src = "assets/imgsLight/discord.svg";
		image[3].src = "assets/imgsLight/java.svg";
		image[4].src = "assets/imgsLight/html5.svg";
		image[5].src = "assets/imgsLight/css3.svg";
		image[6].src = "assets/imgsLight/c.svg";
		image[7].src = "assets/imgsLight/python.svg";
	} else {
		image[0].src = "assets/imgs/github.svg";
		image[1].src = "assets/imgs/twitter.svg";
		image[2].src = "assets/imgs/discord.svg";
		image[3].src = "assets/imgs/java.svg";
		image[4].src = "assets/imgs/html5.svg";
		image[5].src = "assets/imgs/css3.svg";
		image[6].src = "assets/imgs/c.svg";
		image[7].src = "assets/imgs/python.svg";
	}
}

// Discord Function
function discord() {
	document.getElementById('databox').textContent = 'capy #3077';
}

// Search bonus
var bonusImg = document.createElement('li');
bonusImg.innerHTML = '<img onclick="imgEnlarge(this)" style="border: 3px orange solid;" src="assets/illustrations/7.jpg">';
var images = document.getElementById("images");

document.getElementById("txtbox").value = "";

function search(ele) {
	if (document.getElementById("txtbox").value == "bonus") {
		if (ele.keyCode === 13) {
			images.appendChild(bonusImg);
		}
	}

	if (document.getElementById("txtbox").value == "email") {
		if (ele.keyCode === 13) {
			document.getElementById('databox').textContent = 'samanwaya.dutta@gmail.com';
		}
	}
}

// Horizontal scroll
function scrollH(e) {

	e.preventDefault();
	e = window.event || e;
	let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
	document.getElementById('images').scrollLeft -= (delta * 40);
}

if (document.getElementById('images').addEventListener) {
	document.getElementById('images').addEventListener('mousewheel', scrollH, false);
	document.getElementById('images').addEventListener('DOMMouseScroll', scrollH, false);
}

// Enlarge and minimize
var imgEnlarged = 0;

function imgEnlarge(e) {
	if (imgEnlarged === 0) {
		e.style.height = "50vmin";
		imgEnlarged = 1;
	} else {
		e.style.height = "15.5vmin";
		imgEnlarged = 0;
	}
}

// Decoded animation
var decrypted = document.getElementById("decoded");
var encrypted = document.getElementById("encoded");

function startdecrypt() {
	// Original text, split into an array and reversed (for faster pop())
	var originalText = decrypted.textContent.split('').reverse();
	var decryptedText = "";
	var i = 0;

	decrypted.textContent = "";

	var shuffleInterval = setInterval(function() {
		var shuffledText = '';
		var j = originalText.length;
		while (j--) shuffledText += String.fromCharCode((Math.random() * 94 + 33) | 0);
		if (i++ % 10 === 0) decryptedText += originalText.pop();
		// Display
		decrypted.textContent = decryptedText;
		encrypted.textContent = shuffledText;
		// Stop when done
		if (!shuffledText.length) clearInterval(shuffleInterval);
	}, 20);
}

if (window.addEventListener) {
	window.addEventListener('load', startdecrypt, false); //W3C
} else {
	window.attachEvent('onload', startdecrypt); //IE
}