////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Get Balance ArcTic Coin
function getWallet_NEO(address) {
	// Format : http://explorer.arcticcoin.org/ext/getbalance/address
	// var value = 0;
	$.ajax({
		url: "https://neoscan.io/api/main_net/v1/get_balance/"+address,
		type: "GET",
		dataType: 'json',
		async: false,
		crossDomain: true,
		success: function(data) {
			// console.log(data);
			$.each(data, function(key, value) {
				$.each(value, function(ukey, uvalue) {
					var newvalue = 0;
					var tokenName = "";
					var coinmarketcap = "";
					
					if(uvalue.asset == "Ontology Token") {
						newvalue = uvalue.amount / 100000000;
						tokenName = "ONTOLOGY";
						coinmarketcap = "coinmarketcap";
					}
					else if(uvalue.asset == "CPX Token") {
						newvalue = uvalue.amount / 100000000;
						tokenName = "APEX";
						coinmarketcap = "coinmarketcap";
					}
					else if(uvalue.asset == "Switcheo") {
						newvalue = uvalue.amount / 100000000;
						tokenName = "SWITCHEO";
						coinmarketcap = "coinmarketcap";
					}
					else if(uvalue.asset == "Galaxy Token") {
						newvalue = uvalue.amount / 100000000;
						tokenName = "Galaxy";
						coinmarketcap = "";
					}
					else if(uvalue.asset == "Aphelion") {
						newvalue = uvalue.amount / 100000000;
						tokenName = "Aphelion";
						coinmarketcap = "";
					}
					else if(uvalue.asset == "Zeepin Token") {
						newvalue = uvalue.amount / 100000000;
						tokenName = "ZEEPIN";
						coinmarketcap = "coinmarketcap";
					}
					else if(uvalue.asset == "NEO") {
						newvalue = uvalue.amount;
						tokenName = "NEO";
						coinmarketcap = "coinmarketcap";
					}
					else if(uvalue.asset == "GAS") {
						newvalue = uvalue.amount;
						tokenName = "GAS";
						coinmarketcap = "coinmarketcap";
					}
					if(coinmarketcap != "") {
						if(tokenName == "NEO") {
							// lstCoins.push([tokenName, coinmarketcap, 0, "", newvalue, ""]);
							
							if((lstAllTokensCMC.filter(p => p.symbol == tokenName)).length > 0) {
								var indexToken = lstAllTokensCMC.findIndex(p => p.symbol == tokenName);
								var token = lstAllTokensCMC.filter(p => p.symbol == tokenName);
								var totalTokens = parseFloat(newvalue) * token[0].price_eur;
								lstGoodCoins[token[0].rank] = [token[0].id, token[0].symbol, token[0].rank, token[0].price_btc, token[0]["percent_change_24h"], token[0].market_cap_usd, token[0]["24h_volume_usd"], parseFloat(newvalue), token[0].name, token[0].price_usd, token[0].price_eur, "Not a token"] ;
								smallListCoins.push([(token[0].id).toUpperCase(), parseInt(token[0].rank), parseFloat(token[0]["percent_change_24h"]), totalTokens]);
								// console.log(tokenName);
							}
							else {
								unkTokens.push([tokenName, tokenName, 0, 0, 0, 0, 0, ""]);
							}							
						}
						else {
							// lstTokens.push([tokenName, coinmarketcap, 0, "", newvalue, ""]);
							if((lstAllTokensCMC.filter(p => (p.id).toLowerCase() == tokenName.toLowerCase())).length > 0) {
								var indexToken = lstAllTokensCMC.findIndex(p => (p.id).toLowerCase() == tokenName.toLowerCase());
								var token = lstAllTokensCMC.filter(p => (p.id).toLowerCase() == tokenName.toLowerCase());
								var totalTokens = parseFloat(newvalue) * token[0].price_eur;
								lstGoodTokens[token[0].rank] = [token[0].id, token[0].symbol, token[0].rank, token[0].price_btc, token[0]["percent_change_24h"], token[0].market_cap_usd, token[0]["24h_volume_usd"], parseFloat(newvalue), token[0].name, token[0].price_usd, token[0].price_eur, "NEO"] ;
								smallListTokens.push([(token[0].id).toUpperCase(), parseInt(token[0].rank), parseFloat(token[0]["percent_change_24h"]), totalTokens]);
							}
							else {
								unkTokens.push([tokenName, tokenName, 0, 0, 0, 0, 0, ""]);
							}							
						}
					}
				});
			});
		}
	});
	smallListCoins.sort(function(a,b){
		return a[1] - b[1];
	});
	smallListTokens.sort(function(a,b){
		return a[1] - b[1];
	});
	// console.log(smallListTokens);
	return false;

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Get Balance ArcTic Coin
function getWallet_ArcTic(address) {
	// Format : http://explorer.arcticcoin.org/ext/getbalance/address
	var value = 0;
	$.ajax({
		url: "http://spootnik.fr/wscryptos/getwallet.php?address="+address,
		type: "GET",
		dataType: 'html',
		async: false,
		//crossDomain: true,
		success: function(data) {
			value = data;
		}
	});
	var indexToken = lstAllTokensCMC.findIndex(p => (p.id).toLowerCase() == "arcticcoin");
	var token = lstAllTokensCMC.filter(p => (p.id).toLowerCase() == "arcticcoin");
	lstGoodCoins[token[0].rank] = [token[0].id, token[0].symbol, token[0].rank, token[0].price_btc, token[0]["percent_change_24h"], token[0].market_cap_usd, token[0]["24h_volume_usd"], parseFloat(value), token[0].name, token[0].price_usd, token[0].price_eur, "Not a token"] ;
	smallListCoins.push([(token[0].id).toUpperCase(), parseInt(token[0].rank)]);
	return value;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
