/* 
	Author: Dylan Kirby
	Date: 2018-10-08
	Filename: index.js
*/

//function to obtain identifying info about user
function getPersonalInfo()
{
	//variables to store values
	var browser;
	var browserVersion;
	var OS;
	var resolution;
	var screenHeight;
	var screenWidth;
	
	//retrieves values
	browser = navigator.appName;
	browserVersion = navigator.appVersion;
	OS = navigator.platform;
	resolution = screen.pixelDepth;
	screenHeight = screen.height;
	screenWidth = screen.width;
	
	//writes values
	document.getElementById("browser").textContent += browser;
	document.getElementById("browserVersion").textContent += browserVersion;
	document.getElementById("OS").textContent += OS;
	document.getElementById("resolution").textContent += resolution;
	document.getElementById("screenHeight").textContent += screenHeight;
	document.getElementById("screenWidth").textContent += screenWidth;
}

if (window.addEventListener)
{
	window.addEventListener("load", getPersonalInfo, false);
}
else if (window.attachEvent)
{
	window.attachEvent("onload", getPersonalInfo);
}
