var enteredKey = "";
var m=1;
var wrongChoice = 0;
var num = 0;
var streak = 0;
var maxStreak = streak;
var wrongOption = [];
var opt=0;
var alreadySelected=0;
var ranCheck = [];
var ranCheckCounter=0;
var ran;
var flag=0;
var blankSpace = 1;
var charIncompleteArray = [];

var main=function(incompleteWord,completeWord) {
	 
	// var enteredKey;
	ran=returnRandom();
	document.getElementById('query').innerHTML = incompleteWord[ran];
	
	for (var i=0;i<incompleteWord[ran].length;i++){
		charIncompleteArray[i]=incompleteWord[ran][i];
	}
	
	document.getElementById('current').innerHTML = streak;
	 $(document).keypress(function(event){
		enteredKey = String.fromCharCode(event.keyCode);
		enteredKey = enteredKey.toUpperCase();
		if (wrongChoice < 5 && flag==0) {
			compare(completeWord[ran],enteredKey,ran);
		}
		else {
			document.getElementById('wrong').innerHTML = wrongChoice;
			document.getElementById("GameOverMessage").innerHTML = "Could not complete in given steps of " + wrongChoice;
		}
	});
};

var returnRandom= function() {
	bestStr = localStorage.getItem("bestS")== null?0:localStorage.getItem("bestS");
	ran = Math.floor(Math.random() * incompleteWord.length);
	if (ranCheck.length === 0){
		ranCheck[0] = ran;
		return ran;
	}
	else {
		ranCheckCounter=ranCheck.length-5;
		if (ranCheckCounter<0) {
				ranCheckCounter=0;
		}
		while (ranCheckCounter<ranCheck.length) {
			while (ranCheck[ranCheckCounter]===ran) {
				ran = Math.floor(Math.random() * incompleteWord.length);
			}	
			ranCheckCounter=ranCheckCounter+1;
		}
		ranCheck[ranCheck.length]=ran;
		return ran;
	}
 }

var resetFunc = function(){
	ran=returnRandom();
	blankSpace = 1;
	document.getElementById('query').innerHTML = incompleteWord[ran];
	for (var ch=0;ch<incompleteWord[ran].length;ch++){
		charIncompleteArray[ch] = incompleteWord[ran][ch];
		charIncompleteArray.splice(incompleteWord[ran].length,charIncompleteArray.length);
	}
	document.getElementById('play_again').innerHTML = "Skip";
}

var compare=function(word,enteredKey,ran) {
		var changed = 0;
		var index = 0;
		// var btn = document.createElement("BUTTON");
		// var t = document.createTextNode("Play Again");
		// btn.appendChild(t);
		// btn.setAttribute("id", "play_again_btn");
		//checks if the enteredKey is present in word
		while (index<word.length){
			if (enteredKey === word[index]){
				charIncompleteArray[index] = enteredKey;
				if(incompleteWord[ran][index] == "_"){
					changed = 1;
				}
			} 						
			index = index+1;
		}	

		blankSpace = 0;
		for (var j=0;j<incompleteWord[ran].length;j++){
			if (charIncompleteArray[j]==='_'){
				blankSpace = blankSpace+1;
			}
		}
		//if some letters are still remaining
		if (blankSpace > 0){
			document.getElementById('query').innerHTML = charIncompleteArray.join("");
		}
		//if all letters are matched
		else {
			document.getElementById('query').innerHTML = word;
			// document.getElementById('chances').innerHTML = "You are correct!!";
			streak++;
			document.getElementById('current').innerHTML = streak;
			localStorage.setItem("bestS",Math.max(streak,bestStr));
			document.getElementById('best').innerHTML = localStorage.getItem("bestS");
			// if (streak<maxStreak)
				// maxStreak=maxStreak;
			// else 
				// maxStreak=streak;
			// localStorage.setItem("best",Math.max(maxStreak,bestStr));
			// document.getElementById('best').innerHTML = maxStreak;
			document.getElementById('play_again').innerHTML = "Next";
			// document.getElementById("play_again").appendChild(btn);
			flag=1;
		} 	

		opt = 0;
		
		//executes when enteredKey is not present anywhere in the word
		if (changed === 0 ){
			//while loop to ensure no wrong choice repeats
			while(opt<wrongChoice){
				if (enteredKey === wrongOption[opt]){
					alreadySelected = 1;
					break;
				}
				else{
					opt++;
					alreadySelected = 0;
				}
			}
			//executes when unique wrong choice is selected
			if (alreadySelected === 0){
				wrongOption[wrongChoice] = enteredKey;
				wrongChoice = wrongChoice+1;
				$('<span>').text(enteredKey+" ").appendTo("#wrong_choices");
				// document.getElementById('chances').innerHTML = "Chances Left - "+(5-wrongChoice);
				//Switch block to draw the graphic
				switch(wrongChoice) {
					case 1:
						var x = document.createElement("IMG");
						x.setAttribute("src", "images/cartoon_2.png");
						x.setAttribute("style", "height:23%");
						// x.setAttribute("width", "123");
						document.getElementById("cartoon").appendChild(x);
						break;
					case 2:
						var x = document.createElement("IMG");
						x.setAttribute("src", "images/cartoon_3.png");
						x.setAttribute("style", "height:23%");
						// x.setAttribute("width", "123");
						document.getElementById("cartoon").appendChild(x);
						break;
					case 3:
						var x = document.createElement("IMG");
						x.setAttribute("src", "images/cartoon_4.png");
						x.setAttribute("style", "height:23%");
						// x.setAttribute("width", "123");
						document.getElementById("cartoon").appendChild(x);
						break;
					case 4:
						var x = document.createElement("IMG");
						x.setAttribute("src", "images/cartoon_5.png");
						x.setAttribute("style", "height:23%");
						// x.setAttribute("width", "123");
						document.getElementById("cartoon").appendChild(x);
						break;
					case 5:
						var x = document.createElement("IMG");
						x.setAttribute("src", "images/animation.gif");
						x.setAttribute("style", "height:23%");
						// x.setAttribute("width", "123");
						document.getElementById("cartoon").appendChild(x);
						// document.getElementById('chances').innerHTML = "Game Over";
						document.getElementById('query').innerHTML = word;
						streak=0;
						document.getElementById('current').innerHTML = streak;
						document.getElementById('play_again').innerHTML = "Play Again";
						// document.getElementById("play_again").appendChild(btn);
						flag=1;	
						var keyElem = document.getElementsByClassName("keys");
						for(var keyEle=0;keyEle<keyElem.length;keyEle++){
							keyElem[keyEle].disabled = true;
						}
						break;
					default:		
				}
			}
			
		}
}

//on clicking play again
function playAgain(){
	if(blankSpace == 1){
		document.getElementById('current').innerHTML = 0;
		streak = 0;
	}
	var keyElem = document.getElementsByClassName("keys");
	for(var keyEle=0;keyEle<keyElem.length;keyEle++){
		keyElem[keyEle].disabled = false;
	}
	num = num + 1;
	flag=0;
	wrongChoice = 0;
	document.getElementById('wrong_choices').innerHTML = "&nbsp;";
	document.getElementById('cartoon').innerHTML = "";
	// document.getElementById('chances').innerHTML = "Chances Left - "+(5-wrongChoice);
	document.getElementById('play_again').innerHTML = "Play Again";
	var x = document.createElement("IMG");
	x.setAttribute("src", "images/cartoon_1.png");
	x.setAttribute("style", "height:23%");
	// x.setAttribute("width", "123");
	document.getElementById("cartoon").appendChild(x);
	resetFunc();
}

function registerEnteredKey(keyEntered){
	enteredKey = keyEntered.innerHTML;
	enteredKey = enteredKey.toUpperCase();
	compare(completeWord[ran],enteredKey,ran);
}

