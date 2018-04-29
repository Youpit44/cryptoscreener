function generateTable(lstCoins, divInsert) {
	//Build an array containing Customer records.
	var nbToken = lstCoins.length;
	var cptToken = 0;
	var numberOfRows = Math.floor(window.innerHeight / 20);
	var numberOfCells = Math.floor(window.innerWidth / 200);
	var nbRow = nbToken / numberOfCells;
	//Create a HTML Table element.
	var table = document.createElement("TABLE");
	table.border = "0";

	for (var r = 0; r < nbRow; r++) {
		row = table.insertRow(-1);
		for (var j = 0; j < numberOfCells; j++) {
			var cell = row.insertCell(-1);
			if(cptToken < nbToken) {
				var tokenName = $(lstCoins[cptToken++]).splice(",");
				cell.id = tokenName[0];
				if(tokenName[1] == "coinmarketcap") {
					var imgLink = "<img src='"+spootnik_urlStatic32IMG+tokenName[0]+".png' alt='"+tokenName[0]+"' class='center'>";
				}
			}
			else{
				cell.id = "vide";
				cell.innerHTML = "";
			}
		}
	}
	var dvTable = document.getElementById(divInsert);
	dvTable.innerHTML = "";
	dvTable.appendChild(table);	
	$('td[id="vide"]').css("border", "0");
}

function generateTable_offline(lstCoins, divInsert) {
	//Build an array containing Customer records.
	var nbToken = lstCoins.length;
	var cptToken = 0;
	var numberOfRows = Math.floor(window.innerHeight / 20);
	var numberOfCells = Math.floor(window.innerWidth / 200);
	var nbRow = nbToken / numberOfCells;
	//Create a HTML Table element.
	var table = document.createElement("TABLE");
	table.border = "0";

	for (var r = 0; r < nbRow; r++) {
		row = table.insertRow(-1);
		for (var j = 0; j < numberOfCells; j++) {
			var cell = row.insertCell(-1);
			if(cptToken < nbToken) {
				var tokenName = $(lstCoins[cptToken++]).splice(",");
				cell.id = tokenName[0];
				if(tokenName[1] == "coinmarketcap") {
					var imgLink = "<img src='"+spootnik_urlStatic32IMG+tokenName[0]+".png' alt='"+tokenName[0]+"' class='center'>";
				}
			}
			else{
				cell.id = "vide";
				cell.innerHTML = "";
			}
		}
	}
	var dvTable = document.getElementById(divInsert);
	dvTable.innerHTML = "";
	dvTable.appendChild(table);	
	$('td[id="vide"]').css("border", "0");
}

function calculPriceToken(dataToken, coinRef) {
	var convertPrice = 0;
	if(coinRef == "BTC") {
		convertPrice = parseFloat(dataToken[3]);
		currencySym = "B";
		decimals = 8;
	}
	else if(coinRef == "ETH") {
		convertPrice = parseFloat(dataToken[0].price_eth);
		currencySym = "E";
		decimals = 7;
	}
	else if(coinRef == "LTC") {
		convertPrice = parseFloat(dataToken[0].price_ltc);
		currencySym = "L";
		decimals = 7;
	}
	else if(coinRef == "NEO") {
		convertPrice = parseFloat(dataToken[0].price_neo);
		currencySym = "N";
		decimals = 7;
	}
	else if(coinRef == "USD") {
		convertPrice = parseFloat(dataToken[9].price_usd);
		currencySym = "$";
		decimals = 5;
	}
	else {
		// console.log(dataToken);
		convertPrice = parseFloat(dataToken[10]);
		currencySym = "€";
		decimals = 5;
	}
	return convertPrice;
}

function convertDate(timestamp) {
	var date = new Date(timestamp*1000);
	// Hours part from the timestamp
	var hours = date.getHours();
	// Minutes part from the timestamp
	var minutes = "0" + date.getMinutes();
	// Seconds part from the timestamp
	var seconds = "0" + date.getSeconds();
	// Will display time in 10:30:23 format
	var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
	return formattedTime;
}
		
function nFormatter(num, digits) {
	var si = [
		{ value: 1, symbol: "" },
		{ value: 1E3, symbol: " k" },
		{ value: 1E6, symbol: " M" },
		{ value: 1E9, symbol: " B" },
		{ value: 1E12, symbol: " T" },
		{ value: 1E15, symbol: " P" },
		{ value: 1E18, symbol: " E" }
	];
	var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
	var i;
	for (i = si.length - 1; i > 0; i--) {
		if (num >= si[i].value) {
		  break;
		}
	}
	return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}

function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {

            var tarr = [];
            for (var j=0; j<headers.length; j++) {
                tarr.push(headers[j]+":"+data[j]);
            }
            lines.push(tarr);
        }
    }
    // console.log(lines);
	return lines;
}

function processDataSimple(allText) {
    var record_num = 5;  // or however many elements there are in each row
    var allTextLines = allText.split(/\r\n|\n/);
    var entries = allTextLines[0].split(',');
    var lines = [];

    var headings = entries.splice(0,record_num);
    while (entries.length>0) {
        var tarr = [];
        for (var j=0; j<record_num; j++) {
            tarr.push(headings[j]+":"+entries.shift());
        }
        lines.push(tarr);
    }
    console.log(lines);
}


// Hausse du cours d'un token
function pump_Token() {
	
}

// Baisse du cours d'un token
function dump_Token(token) {
	
}

// Grosse hausse du cours d'un token
function verifyBump_Token(token) {
		if(token["percent_change_24h"] > 0) { 
		}
		else { 
		}
}

function getBalance(address) {
	var wei, balance;
	if (typeof web3 !== 'undefined') {
		// console.log('Web3 Detected! ' + web3.currentProvider.constructor.name)
		window.web3 = new Web3(web3.currentProvider);
	} else {
		// console.log('No Web3 Detected... using HTTP Provider')
		window.web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/"+infura_KEY));
	}
	
	try {
		window.web3.eth.getBalance(address, function (error, wei) {
			if (!error) {
				// console.log(address);
				balance = window.web3.fromWei(wei, 'ether');
				//document.getElementById("output").innerHTML = balance + " ETH";
				return balance;
			}
		});
	} catch (err) {
		document.getElementById("output").innerHTML = err;
	}
	return balance;
}

function initScreenerConfiguration() {
	// localStorage.clear();
	// 
	if (localStorage.getItem("cs_configuration") === null) {
		localStorage.setItem('cs_configuration', JSON.stringify(configScreener));
		console.log("Set Init Configuration");
	}
	else {
		var last_configScreener = JSON.parse(localStorage.getItem('cs_configuration'));
		if(last_configScreener.version == configScreener.version) {
			configScreener = last_configScreener;
			console.log("Init Configuration");
		// console.log(configScreener);
		}
		else {
			console.log("Set New Configuration v"+configScreener.version);
			localStorage.setItem('cs_configuration', JSON.stringify(configScreener));
		}
	}
	
	if (localStorage.getItem("cs_lastvisit") === null) {
		localStorage.setItem('cs_lastvisit', JSON.stringify(new Date()));
		console.log("Init Last Visit");
	}
	else {
		lastvisit = new Date(JSON.parse(localStorage.getItem('cs_lastvisit')));
		var diff = new Date(new Date() - lastvisit);
		var minutes = diff.getTime()/1000/60;
		console.log("Get Last Visit : "+lastvisit + " ("+parseInt(minutes)+"min)");
		// console.log(lastvisit);
	}

}