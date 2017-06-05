var morse = {
	  "-----": "0",
	  ".----": "1",
	  "..---": "2",
	  "...--": "3",
	  "....-": "4",
	  ".....": "5",
	  "-....": "6",
	  "--...": "7",
	  "---..": "8",
	  "----.": "9",
	  ".-": "a",
	  "-...": "b",
	  "-.-.": "c",
	  "-..": "d",
	  ".": "e",
	  "..-.": "f",
	  "--.": "g",
	  "....": "h",
	  "..": "i",
	  ".---": "j",
	  "-.-": "k",
	  ".-..": "l",
	  "--": "m",
	  "-.": "n",
	  "---": "o",
	  ".--.": "p",
	  "--.-": "q",
	  ".-.": "r",
	  "...": "s",
	  "-": "t",
	  "..-": "u",
	  "...-": "v",
	  ".--": "w",
	  "-..-": "x",
	  "-.--": "y",
	  "--..": "z",
	  ".-.-.-": ".",
	  "--..--": ",",
	  "..--..": "?",
	  "-.-.--": "!",
	  "-....-": "-",
	  "-..-.": "/",
	  ".--.-.": "@",
	  "-.--.": "(",
	  "-.--.-": ")"
	}

var codesArea = document.getElementById('codesArea');
var clickArea = document.getElementById('clickArea');


var shortClick = 100;
var longClick = 500;
var startTime = 0;
var codes = '';

function clickDown(){

	startTime = Date.now();

}

function clickUp(){
	var endTime = Date.now();
	var diffTime = endTime - startTime;


	if(diffTime <= shortClick){
		codes += '.';
		codesArea.innerHTML += '.';
	}
	else if(diffTime <= longClick){
		codes += '-';
		codesArea.innerHTML += '-';
	}
	else{
		
		if(morse[codes]){
			codesArea.innerHTML += morse[codes] + '<br/>';
			new Audio('sounds/' + morse[codes] + '.mp3').play();
		}
		else{
			codesArea.innerHTML += '<br/>'
		}
		codes = '';
	}
}

clickArea.onmousedown = clickDown; 
clickArea.onmouseup = clickUp;