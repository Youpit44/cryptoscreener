function initScreenerConfiguration() {
    configScreener = JSON.parse(localStorage.getItem('cs_configuration'));
    walletAddress = JSON.parse(localStorage.getItem('cs_wallets'));
    // localStorage.clear();
    // 
    // if (localStorage.getItem("cs_configuration") === null) {
    //     localStorage.setItem('cs_configuration', JSON.stringify(configScreener));
    //     console.log("Set Init Configuration");
    // } else {
    //     var last_configScreener = JSON.parse(localStorage.getItem('cs_configuration'));
    //     if (last_configScreener.version == configScreener.version) {
    //         configScreener = last_configScreener;
    //         console.log("Init Configuration");
    //         // console.log(configScreener);
    //     } else {
    //         console.log("Set New Configuration v" + configScreener.version);
    //         localStorage.setItem('cs_configuration', JSON.stringify(configScreener));
    //     }
    // }

    // if (localStorage.getItem("cs_lastvisit") === null) {
    //     localStorage.setItem('cs_lastvisit', JSON.stringify(new Date()));
    //     console.log("Init Last Visit");
    // } else {
    lastvisit = new Date(JSON.parse(localStorage.getItem('cs_lastvisit')));
    var diff = new Date(new Date() - lastvisit);
    var minutes = diff.getTime() / 1000 / 60;
    //console.log("Get Last Visit : " + lastvisit + " (" + parseInt(minutes) + "min)");
    logInfo(lastvisit + " (" + parseInt(minutes) + "min)", "Get Last Visit");
    // console.log(lastvisit);
    // }
}

function convertDate(timestamp) {
    var date = new Date(timestamp * 1000);
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

    for (var i = 1; i < allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {

            var tarr = [];
            for (var j = 0; j < headers.length; j++) {
                tarr.push(headers[j] + ":" + data[j]);
            }
            lines.push(tarr);
        }
    }
    // console.log(lines);
    return lines;
}

function processDataSimple(allText) {
    var record_num = 5; // or however many elements there are in each row
    var allTextLines = allText.split(/\r\n|\n/);
    var entries = allTextLines[0].split(',');
    var lines = [];

    var headings = entries.splice(0, record_num);
    while (entries.length > 0) {
        var tarr = [];
        for (var j = 0; j < record_num; j++) {
            tarr.push(headings[j] + ":" + entries.shift());
        }
        lines.push(tarr);
    }
    //console.log(lines);
}

function isInt(n) {
    return n % 1 === 0;
}

function filterByName(obj) {
    if ((obj.name).toUpperCase() == (this).toUpperCase()) {
        //console.log(parseInt(obj.id));
        return obj;
    }
    return 0;
}

function filterByID(obj) {
    if ((obj.id).toUpperCase() == (this).toUpperCase()) {
        //console.log(parseInt(obj.id));
        return obj;
    }
    return 0;
}

function filterBySymbol(obj) {
    if ((obj.symbol).toUpperCase() == (this).toUpperCase()) {
        //console.log(parseInt(obj.id));
        return obj;
    }
    return 0;
}

function filterBySlug(obj) {
    if ((obj.slug).toUpperCase() == (this).toUpperCase()) {
        //console.log(parseInt(obj.id));
        return obj;
    }
    return 0;
}

function sortTokens(_Tokens, index, order) {
    // console.log(_Tokens);
    if (order == "ASC") {
        _Tokens.sort(function(a, b) {
            //console.log("A - " + index + " : " + a[index])
            return a[index] - b[index];
        });
    } else {
        _Tokens.sort(function(a, b) {
            // console.log(a);
            // console.log("D - " + index + " : " + a[index])
            return b[index] - a[index];
        });
    }
    return _Tokens;
}

function isTimeToGet(wait_minutes) {
    var lastvisit = new Date(JSON.parse(localStorage.getItem('cs_lastvisit')));
    var diff = new Date(new Date() - lastvisit);
    var minutes = diff.getTime() / 1000 / 60;
    if (minutes >= wait_minutes) {
        return true;
    } else {
        return false;
    }
    return false;

}

function isUpdate() {
    var update = false;
    var last_configScreener = JSON.parse(localStorage.getItem('cs_configuration'));
    if (configScreener.version > last_configScreener.version) {
        update = true;
    }
    return update;
}

function isReady() {
    var ready = true;
    if (localStorage.getItem("cs_lastvisit") === null) {
        ready = false;
    }
    if (localStorage.getItem("cs_configuration") === null) {
        ready = false;
    }
    if (localStorage.getItem("cs_CMClistID") === null) {
        ready = false;
    }
    if (localStorage.getItem("cs_CMCinfos") === null) {
        ready = false;
    }
    if (localStorage.getItem("cs_CMCtokens") === null) {
        ready = false;
    }
    if (localStorage.getItem("cs_wallets") === null) {
        ready = false;
    }
    if (localStorage.getItem("cs_balances") === null) {
        ready = false;
    }
    return ready;
}

function install_CryptoScreener() {
    var ready = false;
    console.log("Installation CryptoScreener v" + configScreener.version);
    console.log("Initialisation Variables Session");

    if (localStorage.getItem("cs_lastvisit") === null) {
        localStorage.setItem('cs_lastvisit', JSON.stringify(new Date()));
        //console.log("Init: Last Visit");
        logInfo("Last Visit", "Init");
        ready = true;
    }
    if (localStorage.getItem("cs_configuration") === null) {
        localStorage.setItem('cs_configuration', JSON.stringify(configScreener));
        //console.log("Init: Configuration");
        logInfo("Configuration", "Init");
        ready = true;
    }
    if (localStorage.getItem("cs_CMClistID") === null) {
        init_CoinMarketCap_ListID_tokens();
        logInfo("CMC Search Infos", "Init");
        ready = true;
    }
    if (localStorage.getItem("cs_CMCinfos") === null) {
        init_CoinMarketCap_Global();
        logInfo("CMC General Infos", "Init");
        ready = true;
    }
    if (localStorage.getItem("cs_CMCtokens") === null) {
        init_CoinMarketCap_Tokens();
        logInfo("CMC Tokens Infos", "Init");
        ready = true;
    }
    if (localStorage.getItem("cs_wallets") === null) {
        localStorage.setItem('cs_wallets', JSON.stringify(walletAddress));
        logInfo("Wallet Addresses", "Init");
        ready = false;
    }
    if (localStorage.getItem("cs_balances") === null) {
        localStorage.setItem('cs_balances', JSON.stringify(walletBalances));
        logInfo("Wallet Balances", "Init");
        ready = true;
    }
    return ready;
}

function changeCurrency(type) {
    walletBalance = 0;
    let old_currency = currency;
    currency = type;
    currencySym = symbol[currency];
    decimals = _decimals[currency];
    configScreener.currencyDefault = currency;
    localStorage.setItem('cs_configuration', JSON.stringify(configScreener));
    logInfo("Set New Configuration v" + configScreener.version);
    // console.log("Set New Configuration v" + configScreener.version);
    logInfo("Change Default Currency " + old_currency + " to " + currency);
    // console.log("Change Default Currency " + old_currency + " to " + currency);
    info_CoinMarketCap_Global();
    smallListCoins = sortTokens(smallListCoins, (configScreener.viewOrder).toLowerCase(), indexOrder);
    smallListTokens = sortTokens(smallListTokens, (configScreener.viewOrder).toLowerCase(), indexOrder);

    clean_AllCards();
    verifyBalances();
}

function cooldown_Wallet() {
    if (walletBalances.lasttime > 1) {
        walletBalances.lasttime = new Date();
        logInfo("Set New Balance " + currencySym + walletBalances, "Store");
        localStorage.setItem('cs_balances', JSON.stringify(walletBalances));
    }
}

function loadWallet_online() {
    $.each(lstCoins, function(key, value) {
        switch (value[0]) {
            case "NEO":
                // if (value[0] == "NEO") {
                value[4] = get_Wallet_NEO(value[5]);
                lstCoins[key] = value;
                break;

            case "ARCTICCOIN":
                value[4] = get_Balance_ArcTic(value[5]);
                lstCoins[key] = value;
                // console.log(lstCoins[key]);
                break;

            case "ETHEREUM":
                value[4] = get_Balance_ETH(value[5]);
                lstCoins[key] = value;
                // console.log(valx);
                break;
            case "WAVES":
                value[4] = get_Balance_Waves(value[5]);
                lstCoins[key] = value;
                // console.log(valx);
                break;
        }
    });
}