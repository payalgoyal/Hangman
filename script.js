var main=function(incompleteWord,completeWord) {
	var m=1;
	var wrongChoice = 0;
	var num = 0;
	var enteredKey;
	var streak = 0;
	var maxStreak = streak;
	var wrongOption = [];
	var opt=0;
	var alreadySelected=0;
	var ranCheck = [];
	var ranCheckCounter=0;
	var ran;
	var flag=0;
	
	var returnRandom= function() {
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
	var enteredKey;
	ran=returnRandom();
	document.getElementById('query').innerHTML = incompleteWord[ran];
	var charIncompleteArray = [];
	for (var i=0;i<incompleteWord[ran].length;i++){
		charIncompleteArray[i]=incompleteWord[ran][i];
	}
	
	var compare=function(word,enteredKey,ran) {
		var changed = 0;
		var index = 0;
		var btn = document.createElement("BUTTON");
		var t = document.createTextNode("Play Again");
		btn.appendChild(t);
		btn.setAttribute("id", "play_again_btn");
		//checks if the enteredKey is present in word
		while (index<word.length){
			if (enteredKey === word[index]){
				charIncompleteArray[index] = enteredKey;	
				changed = 1;
			} 						
			index = index+1;
		}	

		var blankSpace = 0;
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
			document.getElementById('chances').innerHTML = "You are correct!!";
			streak++;
			document.getElementById('current').innerHTML = streak;
			if (streak<maxStreak)
				maxStreak=maxStreak;
			else 
				maxStreak=streak;
			document.getElementById('best').innerHTML = maxStreak;
			document.getElementById("play_again").appendChild(btn);
			flag=1;
		} 		 
		
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
				document.getElementById('chances').innerHTML = "You have "+(5-wrongChoice)+" chances left";
				//Switch block to draw the graphic
				switch(wrongChoice) {
					case 1:
						var x = document.createElement("IMG");
						x.setAttribute("src", "images/cartoon_2.png");
						x.setAttribute("width", "123");
						document.getElementById("cartoon").appendChild(x);
						break;
					case 2:
						var x = document.createElement("IMG");
						x.setAttribute("src", "images/cartoon_3.png");
						x.setAttribute("width", "123");
						document.getElementById("cartoon").appendChild(x);
						break;
					case 3:
						var x = document.createElement("IMG");
						x.setAttribute("src", "images/cartoon_4.png");
						x.setAttribute("width", "123");
						document.getElementById("cartoon").appendChild(x);
						break;
					case 4:
						var x = document.createElement("IMG");
						x.setAttribute("src", "images/cartoon_5.png");
						x.setAttribute("width", "123");
						document.getElementById("cartoon").appendChild(x);
						break;
					case 5:
						var x = document.createElement("IMG");
						x.setAttribute("src", "images/animation.gif");
						x.setAttribute("width", "123");
						document.getElementById("cartoon").appendChild(x);
						document.getElementById('chances').innerHTML = "You ran out of choices!!";
						document.getElementById('query').innerHTML = word;
						streak=0;
						document.getElementById('current').innerHTML = streak;
						document.getElementById("play_again").appendChild(btn);
						flag=1;						
						break;
					default:		
				}
			}
			
		}
		opt=0;
		
		//on clicking play again
		$('#play_again_btn').click(function() {
			num = num + 1;
			flag=0;
			wrongChoice = 0;
			document.getElementById('wrong_choices').innerHTML = "&nbsp;";
			document.getElementById('cartoon').innerHTML = "";
			document.getElementById('chances').innerHTML = "You have "+(5-wrongChoice)+" chances left";
			document.getElementById('play_again').innerHTML = "";
			var x = document.createElement("IMG");
			x.setAttribute("src", "images/cartoon_1.png");
			x.setAttribute("width", "123");
			document.getElementById("cartoon").appendChild(x);
			resetFunc();
		});
		var resetFunc = function(){
			ran=returnRandom();
			document.getElementById('query').innerHTML = incompleteWord[ran];
			for (var ch=0;ch<incompleteWord[ran].length;ch++){
				charIncompleteArray[ch] = incompleteWord[ran][ch];
				charIncompleteArray.splice(incompleteWord[ran].length,charIncompleteArray.length);
			}
		}
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
	//$(document).ready(main);