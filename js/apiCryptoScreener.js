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