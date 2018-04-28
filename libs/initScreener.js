var lstTokens = new Array();
var lstCoins = new Array();
var unkTokens = new Array();
var exceptTokens = new Array();
var exceptContract = new Array();
var lstGoodTokens = new Array();
var lstGoodCoins = new Array();
var smallListTokens = new Array();
var smallListCoins = new Array();

var func_GetWallet = ["NEO","ARCTICCOIN"];

////// Variable pour : COINMARKETCAP :-------------------------------------------------------------------------------
var cmc_urlAPI = "https://api.coinmarketcap.com/v1/ticker/";
var cmc_urlAPIinformation = "https://api.coinmarketcap.com/v1/global/?convert=";
var cmc_urlStaticIMG = "https://s2.coinmarketcap.com/static/img/coins/64x64/";
var cmc_urlStatic32IMG = "https://s2.coinmarketcap.com/static/img/coins/32x32/";
var cmc_sparkLine7d = "https://s2.coinmarketcap.com/generated/sparklines/web/7d/usd/";
var cmc_sparkLine1d = "https://s2.coinmarketcap.com/generated/sparklines/web/1d/usd/";
var spootnik_urlStatic32IMG = "http://spootnik.fr/wscryptos/coins/32x32/";
//-------------------------------------------------------------------------------------------------------------------
// API KEYS
var urlInfura = "https://mainnet.infura.io/";
var infura_KEY = "";
//-------------------------------------------------------------------------------------------------------------------
// WALLET
var ethAddress = "";
var contractJC = ""
var tokenName;
var walletBalance = 0;
var priceETH = 0;
var priceBTC = 0;

var lstAllTokensCMC = [];
var lastvisit = new Date();
var configScreener = { 	onlineMode : false,
						currencyDefault : "EUR",
						nightMode : false,
						localWallet : false,
						walletName : "tokens.csv"
};
