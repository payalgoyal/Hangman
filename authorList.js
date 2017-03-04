function authorList(){
	var list = [];
	list.push({incompWord: "_A__IM C__ND__ C_A__ER__E",
		compWord: "BANKIM CHANDRA CHATTERJEE"});
		
	list.push({incompWord: "_RE__H__D",
		compWord: "PREMCHAND"});
	
	list.push({incompWord: "_AB__D__NA_H _A_O_E",
		compWord: "RABINDRANATH TAGORE"});
	
	list.push({incompWord: "A_I_A _E_A_",
		compWord: "ANITA DESAI"});
		
	list.push({incompWord: "A__ND__T_ _O_",
		compWord: "ARUNDHATI ROY"});
		
	list.push({incompWord: "J_U_P_ _A__R_",
		compWord: "JHUMPA LAHIRI"});
	
	list.push({incompWord: "_UL_ _A_ A__ND",
		compWord: "MULK RAJ ANAND"});
	
	list.push({incompWord: "_K _A__Y_N",
		compWord: "RK NARAYAN"});
	
	list.push({incompWord: "_AL__N R__H__E",
		compWord: "SALMAN RUSHDIE"});
		
	list.push({incompWord: "_I_R_M S__H",
		compWord: "VIKRAM SETH"});
	
	list.push({incompWord: "_S N_I_A_L",
		compWord: "VS NAIPAUL"});
	
	list.push({incompWord: "_IR__ D_S__",
		compWord: "KIRAN DESAI"});
		
	list.push({incompWord: "MA__DE__ _A__A",
		compWord: "MAHADEVI VARMA"});
		
	list.push({incompWord: "_HA__I __SH__ND_",
		compWord: "SHASHI DESHPANDE"});
	
	list.push({incompWord: "S_O_H_ _E",
		compWord: "SHOBHA DE"});
	
	list.push({incompWord: "_H_S_W__T _I__H",
		compWord: "KHUSHWANT SINGH"});

	list.push({incompWord: "S__HA__A _UM_R_ C__UHA_",
		compWord: "SUBHADRA KUMARI CHAUHAN"});
		
	list.push({incompWord: "_UB__M__YA B_A__TH_",
		compWord: "SUBRAMANYA BHARATHI"});
		
	list.push({incompWord: "_A_A__E_A _E_I",
		compWord: "MAHASWETA DEVI"});
	
	list.push({incompWord: "S__AT _H__D__ C_A__E__I",
		compWord: "SARAT CHANDRA CHATTERJI"});
	
	list.push({incompWord: "_AR__AN__ _A_ BA_H_H_N",
		compWord: "HARIVANSH RAI BACHCHAN"});
		
	list.push({incompWord: "_A__HA__AR P_A_A_",
		compWord: "JAISHANKAR PRASAD"});
	
	list.push({incompWord: "AN_N_ _A_S_I",
		compWord: "ANAND BAKSHI"});
		
	list.push({incompWord: "K_Z_ N_Z__L _S__M",
		compWord: "KAZI NAZRUL ISLAM"});
		
	list.push({incompWord: "_HA__TE__U _AR_S__HA__RA",
		compWord: "BHARATENDU HARISHCHANDRA"});
		
	list.push({incompWord: "M__TH__I S__RA_ _U_T",
		compWord: "MAITHILI SHARAN GUPT"});
		
	list.push({incompWord: "_H_T__ B__GA_",
		compWord: "CHETAN BHAGAT"});
		
	list.push({incompWord: "A__ _B__L _A_AM",
		compWord: "APJ ABDUL KALAM"});
		
	list.push({incompWord: "A_R__A P__T_M",
		compWord: "AMRITA PRITAM"});
		
	list.push({incompWord: "_US_I_ _O_D",
		compWord: "RUSKIN BOND"});
		
	list.push({incompWord: "S_R__I_I _A__U",
		compWord: "SAROJINI NAIDU"});
		
	list.push({incompWord: "A__L _A_A_",
		compWord: "ABUL FAZAL"});
		
	list.push({incompWord: "KA__D__",
		compWord: "KALIDAS"});
		
	list.push({incompWord: "_AR_ _WA__",
		compWord: "MARK TWAIN"});
		
	list.push({incompWord: "_HA_L__ _IC__N",
		compWord: "CHARLES DICKEN"});
		
	list.push({incompWord: "_I__IA_ __A_E__EA_E",
		compWord: "WILLIAM SHAKESPEARE"});
		
	list.push({incompWord: "__O _O_S_OY",
		compWord: "LEO TOLSTOY"});
		
	list.push({incompWord: "_G__H_ C__IS__E",
		compWord: "AGATHA CHRISTIE"});
		
	list.push({incompWord: "_S_A_ WI__E",
		compWord: "OSCAR WILDE"});
	
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