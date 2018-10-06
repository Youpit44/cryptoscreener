////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Fonctions -> INIT: CoinMarketCap (CmC)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function init_CoinMarketCap_Global() {
    var cmcInfos;
    console.log("Init: CMC General Infos");
    var jqxhr = $.getJSON(cmc_urlAPIinformation + "EUR");
    jqxhr.done(function(data) {
        cmcInfos = data;
        localStorage.setItem('cs_CMCinfos', JSON.stringify(data));
    });
}

function init_CoinMarketCap_ListID_tokens() {
    //https://s2.coinmarketcap.com/generated/search/quick_search.json
    var lst_CMC_ID_Tokens;
    $.ajax({
        url: cmc_urlAPIQuickSearch,
        type: "GET",
        dataType: 'json',
        async: false,
        //crossDomain: true,
        success: function(data) {
            lst_CMC_ID_Tokens = data;
        }
    });
    localStorage.setItem('cs_CMClistID', JSON.stringify(lst_CMC_ID_Tokens));
}

function init_CoinMarketCap_Tokens() {
    var lst_CMC_All_Tokens = [];
    $.ajax({
        url: cmc_urlAPI + '?limit=0&convert=EUR',
        dataType: 'json',
        async: false,
        success: function(data) {
            lst_CMC_All_Tokens = data;
        }
    });
    localStorage.setItem('cs_CMCtokens', JSON.stringify(lst_CMC_All_Tokens));
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Fonctions -> INIT: CoinMarketCap (CmC)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function init_NEO_ListID_tokens() {
    //https://s2.coinmarketcap.com/generated/search/quick_search.json
    var lst_NEO_ID_Tokens;
    $.ajax({
        url: neo_urlAPIv1.listing,
        type: "GET",
        dataType: 'json',
        async: false,
        //crossDomain: true,
        success: function(data) {
            lst_NEO_ID_Tokens = data;
        }
    });
    localStorage.setItem('cs_NEOlistID', JSON.stringify(lst_NEO_ID_Tokens));
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Fonctions -> LOAD: CoinMarketCap (CmC)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function loadCMC_Global() {
    var dateConvert = new Date();
    var cmc_Infos = [];
    if (isTimeToGet(coolDown.cmc_global)) {
        console.log("Load CMC General Infos");
        // console.log("Get Last Visit : "+lastvisit + " ("+parseInt(minutes)+"min)");
        $.ajax({
            url: cmc_urlAPIv1.global + currency,
            type: "GET",
            dataType: 'json',
            async: false,
            //crossDomain: true,
            success: function(data) {
                //console.log(data);
                cmc_Infos = data;
            }
        });
    } else {
        console.log("Read CMC General Infos");
        cmc_Infos = JSON.parse(localStorage.getItem('cs_CMCinfos'));
        dateConvert = convertDate(cmc_Infos.last_updated);
    }
    return cmc_Infos;
}

function loadCMC_Globalv2() {
    var dateConvert = new Date();
    var cmc_Infos = [];
    if (isTimeToGet(coolDown.cmc_global)) {
        console.log("Load CMC General Infos v2");
        // console.log("Get Last Visit : "+lastvisit + " ("+parseInt(minutes)+"min)");
        $.ajax({
            url: cmc_urlAPIv2.global + currency,
            type: "GET",
            dataType: 'json',
            async: false,
            //crossDomain: true,
            success: function(data) {
                //console.log(data);
                cmc_Infos = data.data;
            }
        });
        localStorage.setItem('cs_CMCinfos', JSON.stringify(cmc_Infos));
    } else {
        console.log("Read CMC General Infos v2");
        cmc_Infos = JSON.parse(localStorage.getItem('cs_CMCinfos'));
        dateConvert = convertDate(cmc_Infos.last_updated);
    }
    return cmc_Infos;
}

function loadCMC_Tokens() {
    var listAllTokens = [];
    if (isTimeToGet(coolDown.cmc_tokens)) {
        console.log("Load CMC Tokens Infos");
        $.ajax({
            url: cmc_urlAPI + '?limit=0&convert=EUR',
            dataType: 'json',
            async: false,
            success: function(data) {
                listAllTokens = data;
            }
        });
        localStorage.setItem('cs_CMCtokens', JSON.stringify(listAllTokens));
    } else {
        console.log("Read CMC Tokens Infos");
        listAllTokens = JSON.parse(localStorage.getItem('cs_CMCtokens'));
        // console.log(listAllTokens);
    }
    return listAllTokens;
}

function loadCMC_ListID_tokens() {
    //https://s2.coinmarketcap.com/generated/search/quick_search.json
    var lst_CMC_ID_Tokens;
    if (isTimeToGet(coolDown.cmc_tokens)) {
        console.log("Load CMC Search Infos");
        $.ajax({
            url: cmc_urlAPIQuickSearch,
            type: "GET",
            dataType: 'json',
            async: false,
            //crossDomain: true,
            success: function(data) {
                //console.log(data);
                lst_CMC_ID_Tokens = data;
            }
        });
        localStorage.setItem('cs_CMClistID', JSON.stringify(lst_CMC_ID_Tokens));
    } else {
        console.log("Read CMC Search Infos");
        lst_CMC_ID_Tokens = JSON.parse(localStorage.getItem('cs_CMClistID'));
        // console.log(listAllTokens);
    }
    return lst_CMC_ID_Tokens;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Fonctions -> LOAD: NEO (NeoScan.io)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function loadNEO_ListID_tokens() {
    //http://notifications.neeeo.org/v1/tokens
    //https://s2.coinmarketcap.com/generated/search/quick_search.json
    /*    var lst_NEO_ID_Tokens;
        if (isTimeToGet(coolDown.neo_tokens)) {
            console.log("Load NEO Search Infos");
            $.ajax({
                url: neo_urlAPIv1.listing,
                type: "GET",
                dataType: 'json',
                async: false,
                //crossDomain: true,
                success: function(data) {
                    //console.log(data);
                    lst_NEO_ID_Tokens = data;
                }
            });
            localStorage.setItem('cs_NEOlistID', JSON.stringify(lst_NEO_ID_Tokens));
        } else {
            console.log("Read NEO Search Infos");
            lst_NEO_ID_Tokens = JSON.parse(localStorage.getItem('cs_NEOlistID'));
            // console.log(listAllTokens);
        }
        return lst_NEO_ID_Tokens;
    */
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Fonctions -> GET: Balances
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Get Balance ArcTic Coin wallet
function get_Balance_ArcTic(address) {
    // Format : http://explorer.arcticcoin.org/ext/getbalance/address
    var balance = 0;
    $.ajax({
        url: "http://spootnik.fr/wscryptos/getwallet.php?address=" + address,
        type: "GET",
        dataType: 'html',
        async: false,
        //crossDomain: true,
        success: function(data) {
            balance = data;
        }
    });
    return parseFloat(balance);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Get Balance LiteCoin wallet
function get_Balance_LiteCoin(address) {
    // Format : https://chain.so/api/v2/get_address_balance/LTC/address
    var balance = 0;
    $.ajax({
        url: "https://chain.so/api/v2/get_address_balance/LTC/" + address,
        type: "GET",
        dataType: 'json',
        async: false,
        //crossDomain: true,
        success: function(data) {
            balance = data.data.confirmed_balance;
        }
    });
    //get_Balance_AssetsWaves(address);
    console.log(balance);
    return parseFloat(balance);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Get Balance BridgeCoin wallet
function get_Balance_BridgeCoin(address) {
    // Format : https://www.coinexplorer.net/api/BCO/address/balance?address=address
    var balance = 0;
    $.ajax({
        url: "https://www.coinexplorer.net/api/BCO/address/balance?address=" + address,
        type: "GET",
        dataType: 'json',
        async: false,
        //crossDomain: true,
        success: function(data) {
            balance = data.result;
        }
    });
    //get_Balance_AssetsWaves(address);
    console.log(balance);
    return parseFloat(balance);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Get Balance Waves Coin wallet
function get_Balance_Waves(address) {
    // Format : https://api.vienna-node.eu/addresses/balance/details/address
    var balance = 0;
    $.ajax({
        url: "https://api.vienna-node.eu/addresses/balance/details/" + address,
        type: "GET",
        dataType: 'json',
        async: false,
        //crossDomain: true,
        success: function(data) {
            balance = data.available / 100000000;
        }
    });
    //get_Balance_AssetsWaves(address);
    //console.log(balance);
    return parseFloat(balance);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Get Balance Waves Assets wallet
function get_Balance_AssetsWaves(address) {
    // Format :https://api.vienna-node.eu/assets/balance/address
    var assets = 0;
    $.ajax({
        url: "https://api.vienna-node.eu/assets/balance/" + address,
        type: "GET",
        dataType: 'json',
        async: false,
        //crossDomain: true,
        success: function(data) {
            assets = data;

            $.each(assets.balances, function(key, wvalue) {
                var newvalue = 0;
                newvalue = wvalue.balance / 10000;
                lstTokens.push([(wvalue.issueTransaction.name).toUpperCase(), "", 0, "WAVES", newvalue]);
                console.log(wvalue);
            });

        }
    });

    return parseFloat(assets);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Get Balance xxxx wallet
function get_Balance_ETH(address) {
    var balance;
    $.ajax({
        url: "https://api.ethplorer.io/getAddressInfo/" + address + "?apiKey=freekey",
        type: "POST",
        dataType: 'json',
        async: false,
        //crossDomain: true,
        success: function(data) {
            // console.log(data.ETH.balance);
            balance = data.ETH.balance;
        }
    });
    localStorage.setItem('cs_ETHwallet', JSON.stringify(balance));
    return parseFloat(balance);


}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Get Balance NEO Coin and Tokens wallet
function get_Wallet_NEO(address) {
    // Format : https://neoscan.io/api/main_net/v1/get_balance/address
    var balance = 0;
    $.ajax({
        url: neo_urlAPIv1.balance + address,
        type: "GET",
        dataType: 'json',
        async: false,
        crossDomain: true,
        success: function(data) {
            // console.log(data);
            $.each(data.balance, function(key, uvalue) {
                // console.log(value);
                //$.each(value, function(ukey, uvalue) {
                var newvalue = 0;
                var tokenName = "";
                var coinmarketcap = "";
                // console.log(uvalue);
                switch (uvalue.asset) {
                    case "NEO":
                        newvalue = uvalue.amount;
                        tokenName = "NEO";
                        coinmarketcap = "coinmarketcap";
                        balance = uvalue.amount;
                        break;
                    case "GAS":
                        newvalue = uvalue.amount;
                        tokenName = "GAS";
                        coinmarketcap = "coinmarketcap";
                        break;
                    case "Ontology Token":
                        newvalue = uvalue.amount;
                        tokenName = "ONTOLOGY";
                        coinmarketcap = "coinmarketcap";
                        break;
                    case "CPX Token":
                        newvalue = uvalue.amount;
                        tokenName = "APEX";
                        coinmarketcap = "coinmarketcap";
                        break;
                    case "Switcheo":
                        newvalue = uvalue.amount;
                        tokenName = "SWITCHEO";
                        coinmarketcap = "coinmarketcap";
                        break;
                    case "Galaxy Token":
                        newvalue = uvalue.amount;
                        tokenName = "Galaxy";
                        coinmarketcap = "coinmarketcap";
                        break;
                    case "Aphelion":
                        newvalue = uvalue.amount;
                        tokenName = "Aphelion";
                        coinmarketcap = "coinmarketcap";
                        break;
                    case "Zeepin Token":
                        newvalue = uvalue.amount;
                        tokenName = "ZEEPIN";
                        coinmarketcap = "coinmarketcap";
                        break;
                    case "Phantasma":
                        newvalue = uvalue.amount;
                        tokenName = "Phantasma";
                        coinmarketcap = "coinmarketcap";
                        break;
                    case "Quarteria Token":
                        newvalue = uvalue.amount;
                        tokenName = "Quarteria";
                        coinmarketcap = "coinmarketcap";
                        break;
                    case "Master Contract Token":
                        newvalue = uvalue.amount;
                        tokenName = "Master-Contract-Token";
                        coinmarketcap = "coinmarketcap";
                        break;
                    case "THEKEY Token":
                        newvalue = uvalue.amount;
                        tokenName = "THEKEY";
                        coinmarketcap = "coinmarketcap";
                        break;
                    default:
                }

                if (coinmarketcap != "") {
                    if (tokenName != "NEO") {
                        var cmc_idToken = lst_CMC_ID_Tokens.filter(filterBySlug, tokenName.toUpperCase());
                        if (cmc_idToken.length > 0) {
                            lstTokens.push([(cmc_idToken[0].slug).toUpperCase(), "coinmarketcap", 0, "NEO", newvalue]);
                        } else {
                            lstUnkTokens.push([tokenName.toUpperCase(), "NEP", 0, "", newvalue]);
                        }
                    }
                }
            });
        }
    });

    //console.log(lstTokens);
    return parseFloat(balance);

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Get Balance LiteCoin wallet
function get_Generique_Balance(token, address) {
    // Format : https://chain.so/api/v2/get_address_balance/LTC/address
    var balance = 0;
    $.ajax({
        url: balance_urlAPI[token] + address + "/balance",
        type: "GET",
        dataType: 'html',
        async: false,
        //crossDomain: true,
        success: function(data) {
            balance = data;
        }
    });
    //get_Balance_AssetsWaves(address);
    console.log(balance / 100000000);
    return parseFloat(balance / 100000000);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Get Token Price on IDEX
function get_TokenPrice_IDEX(pair) {
    var lstAllTokens = new Array();
    $.ajax({
        url: "https://api.idex.market/returnTicker",
        type: "POST",
        dataType: 'json',
        async: false,
        //crossDomain: true,
        success: function(data) {
            // console.log(data["ETH_SAN"]);
            lstAllTokens = data;
        }
    });
    // localStorage.setItem('cs_ETHwallet', JSON.stringify(balance));
    return lstAllTokens;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Get Token Price on TokenStore
function get_TokenPrice_TokenStore(pair) {
    var lstAllTokens = new Array();
    $.ajax({
        url: "https://v1.api.token.store/ticker",
        type: "GET",
        dataType: 'json',
        async: false,
        //crossDomain: true,
        success: function(data) {
            // console.log(data["ETH_SAN"]);
            lstAllTokens = data;
        }
    });
    // localStorage.setItem('cs_ETHwallet', JSON.stringify(balance));
    return lstAllTokens;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Get Token Price on Binance
function get_TokenPrice_Binance(pair) {
    var lstAllTokens = new Array();
    $.ajax({
        url: "https://api.binance.com/api/v3/ticker/price",
        type: "GET",
        dataType: 'json',
        async: false,
        //crossDomain: true,
        success: function(data) {
            // console.log(data["ETH_SAN"]);
            lstAllTokens = data;
        }
    });
    // localStorage.setItem('cs_ETHwallet', JSON.stringify(balance));
    return lstAllTokens;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////