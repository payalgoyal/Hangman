function bollywoodList(){
	var list = [];
	list.push({incompWord: "A_A_ A__A_ A___O_Y",
		compWord: "AMAR AKBAR ANTHONY"});
		
	list.push({incompWord: "O__E U_O_ _ _I_E I_ _U__A_",
		compWord: "ONCE UPON A TIME IN MUMBAI"});
	
	list.push({incompWord: "_U_ _I_ _E __U_E _A_A_",
		compWord: "HUM DIL DE CHUKE SANAM"});
	
	list.push({incompWord: "_A_A__E_ _O__O_",
		compWord: "NAMASTEY LONDON"});
		
	list.push({incompWord: "_A_A_A_ __ _A_A_A_ _A_",
		compWord: "QAYAMAT SE QAYAMAT TAK"});
		
	list.push({incompWord: "_E_A __E_I",
		compWord: "HERA PHERI"});
	
	list.push({incompWord: "_EE_ _AA_ __A_",
		compWord: "TEES MAAR KHAN"});
	
	list.push({incompWord: "A__EE_A__",
		compWord: "AGNEEPATH"});
	
	list.push({incompWord: "_O____A_",
		compWord: "ROCKSTAR"});
		
	list.push({incompWord: "E_ __A _I_E_",
		compWord: "EK THA TIGER"});
	
	list.push({incompWord: "__M A__K_ __I _A_N",
		compWord: "HUM AAPKE HAI KAUN"});
	
	list.push({incompWord: "__O_A_",
		compWord: "SHOLAY"});
		
	list.push({incompWord: "_A_A_ _A_A_",
		compWord: "NAMAK HARAM"});
		
	list.push({incompWord: "_A_A__G",
		compWord: "DABANGG"});
	
	list.push({incompWord: "_I__A_I __A _I_E_I _O__R_",
		compWord: "ZINDAGI NAA MILEGI DOBARA"});
	
	list.push({incompWord: "R__D_ _A__O_E",
		compWord: "ROWDY RATHORE"});
	
	list.push({incompWord: "_A__A__I __A___A_",
		compWord: "BAJRANGI BHAIJAAN"});
		
	list.push({incompWord: "_I__A_E _U__A_I_A _E _A_E__E",
		compWord: "DILWALE DULHANIYA LE JAYENGE"});
	
	list.push({incompWord: "__E__A_ E___E_S",
		compWord: "CHENNAI EXPRESS"});
	
	list.push({incompWord: "__ _A_E I_ __A_",
		compWord: "MY NAME IS KHAN"});
		
	list.push({incompWord: "__A_E _A__E_ _A_",
		compWord: "TAARE ZAMEEN PAR"});
	
	//22
	list.push({incompWord: "__O__A_A__H__",
		compWord: "SOORYAVANSHAM"});
		
	list.push({incompWord: "_E___A",
		compWord: "NEERJA"});
		
	list.push({incompWord: "_I__I__",
		compWord: "AIRLIFT"});
		
	list.push({incompWord: "_A_I_A_ _A__A_I",
		compWord: "BAJIRAO MASTANI"});
		
	list.push({incompWord: "__E_ _A_A_ __A_ _A_O",
		compWord: "PREM RATAN DHAN PAYO"});
		
	list.push({incompWord: "_A__A_",
		compWord: "DANGAL"});
		
	list.push({incompWord: "_ I_I___",
		compWord: "3 IDIOTS"});
		
	list.push({incompWord: "_A__ _E _A_A__I",
		compWord: "RANG DE BASANTI"});
		
	list.push({incompWord: "_A__A_",
		compWord: "LAGAAN"});
		
	list.push({incompWord: "_U__A __A_ M___",
		compWord: "MUNNA BHAI MBBS"});
		
	list.push({incompWord: "_O__E_ I__I_",
		compWord: "MOTHER INDIA"});
		
	list.push({incompWord: "_O _EE_A _O_I _I_A__E_",
		compWord: "JO JEETA WOHI SIKANDER"});
		
	list.push({incompWord: "_A_ _O _A_ _O",
		compWord: "KAL HO NAA HO"});
		
	list.push({incompWord: "_A_E _A__ _U__A __A_",
		compWord: "LAGE RAHO MUNNA BHAI"});
		
	list.push({incompWord: "_E_A _A__ _O_E_",
		compWord: "MERA NAAM JOKER"});
		
	list.push({incompWord: "_N_A_ A__A A__A",
		compWord: "ANDAZ APNA APNA"});
		
	list.push({incompWord: "_A____A",
		compWord: "LAKSHYA"});
		
	list.push({incompWord: "_A_A_ A__U_",
		compWord: "KARAN ARJUN"});
	
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