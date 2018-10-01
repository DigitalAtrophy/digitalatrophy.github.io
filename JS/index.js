/* 
	Author: Dylan Kirby
	Date: 2018-09-30
	Filename: index.js
*/

//global variables for validity check
var validHeight = false;
var validWeight = false;
var height = 0;

//function to test for number
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

//series of try catch blocks to catch exceptions
function verifyHeight()
{
	try
	{
		height = document.getElementById("height").value;
		
		if (height === "")
		{
			throw "Please enter your height.";
		}
		else
		{
			try
			{
				if (isNumber(height))
				{
					try
					{
						if (height <= 0)
						{
							throw "Please enter a height greater than 0.";
						}
						else
						{
							validHeight = true;
						}
					}
					catch(heightError)
					{
						window.alert(heightError);
					}
				}
				else
				{
					throw "Please enter a number for your height.";
				}
			}
			catch(heightError)
			{
				window.alert(heightError);
			}
		}
	}
	catch(heightError)
	{
		window.alert(heightError);
	}
}

function verifyWeight()
{
	try
	{
		weight = document.getElementById("weight").value;
		
		if (weight === "")
		{
			throw "Please enter your weight.";
		}
		else
		{
			try
			{
				if (isNumber(weight))
				{
					try
					{
						if (weight <= 0)
						{
							throw "Please enter a weight greater than 0.";
						}
						else
						{
							validWeight = true;
						}
					}
					catch(weightError)
					{
						window.alert(weightError);
					}
				}
				else
				{
					throw "Please enter a number for your weight.";
				}
			}
			catch(weightError)
			{
				window.alert(weightError);
			}
		}
	}
	catch(weightError)
	{
		window.alert(weightError);
	}
}

//function to test for valid inputs
function testValidity()
{
	document.getElementById("bmi").innerHTML = "";
	verifyHeight();
	
	if (validHeight)
	{
		verifyWeight();
		
		if (validWeight)
		{
			calcBMI();
		}
	}
}

function calcBMI()
{
	//var height = 0;
	var weight = 0;
	var bmi = 0;
			
	if (document.getElementById("inches").checked) //converts to meters if inches
	{
		height = height * 0.0254;
	}
	else if (document.getElementById("centimeters").checked) //converts cm to m
	{
		height = height * 0.01;
	}
			
	if (document.getElementById("pounds").checked) //converts lbs to kg
	{
		weight = weight * 0.453592;
	}
	else if (document.getElementById("kilograms").checked)
	{
		weight = document.getElementById("weight").value * 1;
	}
			
	bmi = weight / (height * height);
	
	//clears input fields and resets validity checks
	document.getElementById("bmi").innerHTML = "Your BMI is " + bmi.toFixed(1) + ".";
	document.getElementById("height").value = "";
	document.getElementById("weight").value = "";
	validHeight = false;
	validWeight = false;
}
		
var submitButton = document.getElementById("submit");
if (submitButton.addEventListener)
{
	submitButton.addEventListener("click", testValidity, false);
}
else if (submitButton.attachEvent)
{
	submitButton.attachEvent("onclick", testValidity);
}