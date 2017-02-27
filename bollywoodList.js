function bollywoodList(){
	var list = [];
	list.push({id: 1,
		incompWord: "_A_O _A __AA_ _AI",
		compWord: "KAHO NA PYAAR HAI"});
		
	list.push({id: 2,
		incompWord: "_O_A_A_EI_",
		compWord: "MOHABATEIN"});
	
	list.push({id: 3,
		incompWord: "_I__A_E",
		compWord: "DILWALE"});
	
	incompleteWord = [];
	completeWord = [];
	for (var inc = 0;inc<list.length;inc++){
		incompleteWord.push(list[inc].incompWord);
	}
	for (var com = 0;com<list.length;com++){
		completeWord.push(list[com].compWord);
	}
	main(incompleteWord,completeWord)
}