var lstTokens = new Array();
var lstCoins = new Array();
// var unkTokens = new Array();
var exceptTokens = new Array();
var exceptContract = new Array();
// var lstGoodTokens = new Array();
// var lstForkDeltaTokens = new Array();
// var lstGoodCoins = new Array();
var smallListTokens = new Array();
// var smallListForkDeltaTokens = new Array();
var smallListCoins = new Array();

var list_Wallets_Online = new Array();

var list_All_CMCTokens = new Array();

// var func_GetWallet = ["NEO","ARCTICCOIN"];

////// Variable pour : COINMARKETCAP :-------------------------------------------------------------------------------
var cmc_urlAPI = "https://api.coinmarketcap.com/v1/ticker/";
var cmc_urlAPIinformation = "https://api.coinmarketcap.com/v1/global/?convert=";
var cmc_urlStaticIMG = "https://s2.coinmarketcap.com/static/img/coins/64x64/";
var cmc_urlStatic32IMG = "https://s2.coinmarketcap.com/static/img/coins/32x32/";
var cmc_urlAPIQuickSearch = "https://s2.coinmarketcap.com/generated/search/quick_search.json";

var cmc_sparkLine7d = "https://s2.coinmarketcap.com/generated/sparklines/web/7d/usd/";
var cmc_sparkLine1d = "https://s2.coinmarketcap.com/generated/sparklines/web/1d/usd/";

var spootnik_urlStatic32IMG = "http://spootnik.fr/wscryptos/coins/32x32/";
//-------------------------------------------------------------------------------------------------------------------
// API KEYS
var urlInfura = "https://mainnet.infura.io/";
var infura_KEY = "";
//-------------------------------------------------------------------------------------------------------------------
// WALLET
// var ethAddress = "";
// var contractJC = ""
var tokenName;
var walletBalance = 0;
var priceToken = {
    ETH: 0,
    BTC: 0,
    LTC: 0,
    NEO: 0
};

var symbol = {
    ETH: "<b>Ξ</b>",
    BTC: "<i class='fa fa-btc'></i>",
    LTC: "Ł",
    EUR: "€",
    USD: "$",
    NEO: "Neo"
};

var _decimals = {
    BTC: 7,
    ETH: 7,
    LTC: 7,
    NEO: 7,
    EUR: 3,
    USD: 3
};

var walletBalances = {
    BTC: 0,
    ETH: 0,
    LTC: 0,
    NEO: 0,
    EUR: 0,
    USD: 0
};


var lastvisit = new Date();
var coolDown = {
    cmc_global: 300,
    cmc_tokens: 300
};

var configScreener = {
    onlineMode: false,
    currencyDefault: "EUR",
    nightMode: false,
    localWallet: true,
    otherWallet: true,
    viewOrder: "24H",
    walletName: "tokens.csv",
    graphDisplay: true,
    graphMode: "7d",
    version: 0.53
};

var colorBadge = {
    blue: "badge-primary",
    success: "badge-success",
    info: "badge-info",
    warning: "badge-warning",
    danger: "badge-danger",
    light: "badge-light",
    dark: "badge-dark"
};
var colorCard = {
    blue: "bg-primary",
    success: "bg-success",
    info: "bg-info",
    warning: "bg-warning",
    danger: "bg-danger",
    light: "bg-light",
    dark: "bg-dark",
    secondary: "bg-secondary"
};


var templateBadge = "<div id='_SLUG_' class='col-12 col-sm-6 col-md-2'>" +
    "<div class='card'>" +
    "<div id='headerCard' class='card-header'>" +
    "<div class='row'>" +
    "<div class='col-md-3'><img class='' src='" + cmc_urlStaticIMG + "_ID_FLAG_.png' /></div>" +
    "<div class='col-md-9'>" +
    "<h6 class='card-title font-weight-bold'>_TOKEN_ <span class='small font-weight-light'><sup>_SHT_</sup></span><span id='tokenPill' class=''></span></h6>" +
    "<p class='card-text'>_TokenP_ <span id='badgePchange' class='float-right badge'>_PChange_%</span></p>" +
    "<p class='card-text'><span class='float-left small'>_S_: _NBToken_</span></p><hr>" +
    "<p class='card-text'><span class='float-left small'><img width='10' src='https://coinmarketcap.com/favicon.ico' /> _WalletP_</span><span class='float-right small'><img width='10' src='https://idex.market/favicon.ico' /> _WalletP_</span></p>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "<div class='card-body' id='rowTokenInfos'>" +
    "<div id='rtHeaders' class='row'>" +
    "<div class='col-md-3 text-center'>RANK</div>" +
    "<div class='col-md-4 text-center'>MARKET CAP</div>" +
    "<div class='col-md-4 text-center'>VOLUME (24H)</div>" +
    "</div>" +
    "<div id='rtDatas' class='row'>" +
    "<div class='col-md-3 text-center'>_RANK_</div>" +
    "<div class='col-md-4 text-center'>_Currency__MCAP_</div>" +
    "<div class='col-md-4 text-center'>_Currency__VOLUME_</div>" +
    "</div>" +
    //<!-- <a href='#' class='card-link'>link</a>
    //<a href='#' class='card-link'>link</a> -->
    "</div>" +
    "<div class='card-footer'>" +
    "<div id='dayGraph' class='col-md-3 float-left'><ul class='nav flex-column'>" +
    "<li class='nav-item'>" +
    "<a class='nav-link small' href='#'>1d</a>" +
    "</li>" +
    "<li class='nav-item'>" +
    "<a class='nav-link small' href='#'>7d</a>" +
    "</li>" + "</ul>" +
    "</div><div class='col-md-9 float-right'>" +
    "<img id='imgGraph' class='img-fluid mx-auto d-block' src='" + cmc_sparkLine7d + "_ID_FLAG_.png' /></div></div>" +
    "</div>" +
    "</div>";