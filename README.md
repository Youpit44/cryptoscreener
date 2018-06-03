# CryptoScreener - Tatooine  
![Capture Crypto-Screener](https://raw.githubusercontent.com/Youpit44/cryptoscreener/tatooine/docs/v_Tatooine.png)  
## ATTENTION : Ajout d'un nouveau DEX sur [DeltaBalances.github.io](https://deltabalances.github.io/).
**Pensez à refaire un export en cochant toutes les cases des exchanges.**  
  
    
**Troisième essai** du dashboard de suivi des cryptos-monnaies suivant un choix défini.  
Il utise les API de coinmarcketcap.com, ForkDelta, Infura, Ethplorer pour les tokens ERC20, l'API de NEO et d'ArcTic. D'autres suivront suivant les besoins. 
   
### Fonctionnalités :  
  * Prise en charge de toutes les crypto-monnaies référencées par CoinMarketCap.com (price, rank, icon, marketcap, supply, ...),  
  * Récupération des balances des cryptos suivantes : NEO et ses NEP, ETH et ses ERC20, Advanced Technology Coin (ARC), (pour le moment) ....  
  * Gestion de votre balance pour chaque crypto, calcul global de votre porte-feuille d'actifs et convertion vers EUR, USD ou BTC,  
  * Affichage au format carte suivant un tri sur le rang, le volume 24h en % et votre balance (nombre de token en votre possession),  
  * Portail de liens vers les principaux sites d'informations, d'exchanges ou de wallets.  

### Support des Wallets en cours et à venir :  
- [x] Ethereum : [DeltaBalances.github.io](https://deltabalances.github.io/), [Ethplorer.io](https://Ethplorer.io/)  
- [x] Neo : [NeoScan.io](https://neoscan.io)  
- [x] ArcTic Coin : [ArcTiccoin.org](http://explorer.arcticcoin.org/)  
- [ ] LiteCoin : * * à venir* *   
- [ ] BitCoin : * * à venir* *   
- [ ] Waves : * * à venir* *   
- [ ] ...   
  
### Dernier changement :  
- [x] Prise en charge du Wallet [NEO](https://neotracker.io/wallet) et de ses NEP ainsi que du Wallet [ArcTic Coin](https://arcticcoin.org/),  
- [x] Affichage des **Supply** du token dans une infobulle sur l'icone du token,  
- [x] Récupération et affichage du prix du token ERC20 de la plateforme [IDEX](https://idex.market/),  
- [x] **Prise en compte du nouveau format** d'export .CSV de [DeltaBalances.github.io](https://deltabalances.github.io/) (ajout d'un nouveau DEX [Enclaves](http://enclaves.io/),  
- [x] Refonte de l'interface Responsive multi-devices (BootStrap 4),  
- [x] Traitement asynchrone des données,  
- [x] Mode semi-automatique ou manuel,  
- [x] Utilisation des cookies pour stocker les données des tokens,  
- [x] Réductions de l'appel de l'API CMC à 15 min,  
- [x] Tri sur le prix, volume, rang,  
- [x] Lien direct vers CmC sur le nom du token,  
- [x] Chargement de l'export du wallet ETH de [DeltaBalances.github.io](https://deltabalances.github.io/),  
- [x] Traitement séparé entre les Coins (type BTC, ETH, NEO) et les Tokens (type Erc20, Neo, ...),  
- [x] Mode Offline.  
  
### Prochainement :  
- [ ] Mode Online complet : *20%*,  
- [ ] Utilisation de l'API de ForkDelta et de TokenStore : *30%*,  
- [ ] Vérification des tokens ERC20 non reconnu sur CMC : *50%*.  

---
## Pour fonctionner correctement :  
### Il fortement conseiller d'utiliser le navigateur "**Chrome**" et d'ajouter l'extension "Web-Server local" disponible sur le [Store de Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb)  
> N'oubliez pas de configurer l'extension WebServer pour lui indiquer le dossier contenant l'indexl.html.  

Ajouter les options suivantes au racourcci de "**Chrome**" pour réduire les sécurités :  
```
  --allow-file-access-from-files  
  --disable-web-security  
```
Ces options permettent le chargement des données en local. Le syndrome du "**cross domain**" peut aussi survenir avec certain navigateur autre que "**Chrome**". Pour limiter cet effet vous pouvez télécharger la base [Coinmarketcap.com](https://api.coinmarketcap.com/v1/ticker/?limit=0&convert=EUR) au format JSON et la sauvegarder sous le nom de "[cmc.json](https://api.coinmarketcap.com/v1/ticker/?limit=0&convert=EUR)" dans le dossier principal avec l'index.html.  
  
---
L'utilisation est simple, il faut juste copier le fichier "[index.html](index.html)" et les dossiers de librairies "[js](js/)" et "[css](css/)" dans un dossier et double-cliquer sur le fichier "[index.html](index.html)" .  
Votre navigateur par défaut s'ouvrira sur la page avec des données de tests. 
  
---  
## Pour un fonctionnement semi-automatique :  
Il faut exporter votre Wallet Ethereum au format ".CSV" par le biais du site [DeltaBalances.github.io](https://deltabalances.github.io/). Le seul à proposer cette possibilité. Veilliez a bien selectionner toutes les options, **exchanges compris** !    
Sauvegarder le fichier exporté dans le dossier de l'index.html sous le nom "Tokens.csv".   
  
## Pour un fonctionnement manuel :  
__Il faut modifier le fichier "[configCryptoScreener.js](js/configCryptoScreener.js)" après l'entête suivante :__  
```
  ////////////////////////////////////////////////////////////////////////////////////////////////////  
  // LISTE DES COINS A MODIFIER  
  ////////////////////////////////////////////////////////////////////////////////////////////////////  
```
### Capture du fichier "[configCryptoScreener.js](js/configCryptoScreener.js)" :  
![Capture Configuration Crypto-Screener](https://raw.githubusercontent.com/Youpit44/cryptoscreener/master/docs/Config.PNG)  
  
1) Complèter la/les lignes suivantes pour ajouter vous coins type **Bitcoin, Ethereum, Neo, Waves, .....** un par ligne comme l'exemple ci-dessus :  
```
  lstCoins.push(["BITCOIN", "coinmarketcap", 0, "", 0.09, ""]);  
```
> **BITCOIN** : nom du coin à suivre  
> **coinmarketcap** : api à utiliser  
> **O** : ne sert plus  
> **""** : ne rien mettre pour le moment  
> **0.09** : nombre de coins que vous possedez (0 si vous ne voulez pas utiliser cette option)  
> **""** :  mettre la clé publique de votre wallet (sert pour recupérer les balances de vos Wallets, uniquement **NEO** et **ArcTic-Coin** pour le moment)    
           
2) Complèter la/les lignes suivantes pour ajouter vous tokens compatible **ERC20 d'Ethereum**, un par ligne comme l'exemple ci-dessus :  
```
  lstTokens.push(["HAVVEN", "coinmarketcap", 0, "", 200.50]);
```
> **HAVVEN** : nom du token à suivre  
> **coinmarketcap** : api à utiliser  
> **O** : ne sert plus  
> **""** : ne rien mettre pour le moment  
> **200.50** : nombre de tokens que vous possedez (0 si vous ne voulez pas utiliser cette option)  
  
### Le mode semi-automatique fonctionne conjointement au mode manuel. Vous pouvez suivre vos Tokens ERC20 exportés de DeltaBalance et d'autres coins ou tokens que vous n'avez pas sur votre wallet ethereum ou d'autres wallets.   
  
---  
Première version Tatooine :  
![Capture Crypto-Screener](https://raw.githubusercontent.com/Youpit44/cryptoscreener/tatooine/docs/Capture.PNG)  
---  
Si vous désirez des modifications, n'hesitez pas à laissez une issue pour me notifier de votre demande, évolution ou même support.  
@Youpit  
```
Eth: 0x2a0bc682Cf0A70E4489089E550383dC9F28aF34B  
Ltc: LdJGoMUsvzZtD47yXJ1WuH5kBpGiGDtFdvVM  
Neo: AZNU7GrAcVe5XXQaqzpyh3HmX2nVGyuthd  
Waves: 3PMY2vMw1EaQfZF9FMBj2ssatTUjn9P9WJT  
```