# CryptoScreener - Tatooine  
![Capture Crypto-Screener](https://raw.githubusercontent.com/Youpit44/cryptoscreener/tatooine/docs/Capture.PNG)  
## ATTENTION : Nouvelle version !! La documentation ci-dessous reste à completer, mais permet d'éxécuter le script de suivi.
### Nouveautés :  
  *Refonte de l'interface (BootStrap 4)  
  *Traitement asynchrone des données  
  *Mode semi-automatique ou manuel  
  *Vérification des tokens ERC20 non reconnu sur CMC  
  *Utilisation des cookies pour stocker les données des tokens  
  *Réductions de l'appel de l'API CMC à 15 min  
  *Utilisation de l'API de ForkDelta  **en cours**  
  *Chargement de l'export du wallet ETH de [DeltaBalances.github.io](https://deltabalances.github.io/)   **en cours**  
  *Traitement séparé entre les Coins (type BTC, ETH, NEO) et les Tokens (type Erc20, Neo, ...)  
  *Mode Online ou Offline  
  
### Support des Tokens ERC20 d'Ethereum par CoinMarketCap (CMC) et ForkDelta.  
### Support des Wallets NEO et ARCTIC-COIN (pour le moment... :) )  
  
---    
Troisième essai du dashboard de suivi des cryptos-monnaies suivant un choix défini.  
Il utise les API de coinmarcketcap.com, ForkDelta, Infura, Ethplorer pour les tokens ERC20, l'API de NEO et d'ArcTic. D'autres suivront suivant les besoins.  
  
L'utilisation est simple, il faut juste copier le fichier "[index.html](index.html)" et son dossier de librairies "[libs](libs/)" dans un dossier et double-cliquer sur le fichier "[index.html](index.html)" .  
Votre navigateur par défaut s'ouvrira sur la page avec des données de tests. 
  
---
## Pour fonctionner correctement :  
### Il fortement conseiller d'utiliser le navigateur "**Chrome**" et d'ajouter l'extension "Web-Server local" disponible ici :  
et d'ajouter les options suivantes au racourcci  :  
  **--allow-file-access-from-files**  
Cette option permet le chargement des données en local. Le syndrome du "**cross domain**" peut aussi survenir avec certain navigateur autre que "**Chrome**". Pour limiter cet effet vous pouvez télécharger la base [Coinmarketcap.com](https://api.coinmarketcap.com/v1/ticker/?limit=0&convert=EUR) au format JSON et la sauvegarder sous le nom de "[cmc.json](https://api.coinmarketcap.com/v1/ticker/?limit=0&convert=EUR)" dans le dossier principal avec l'index.html.  
  
---
## Pour un fonctionnement semi-automatique :  
Il faut exporter votre Wallet Ethereum au format ".CSV" par le biais du site [DeltaBalances.github.io](https://deltabalances.github.io/). Le seul à proposer cette possibilité. Veilliez a bien selectionner toutes les options, **exchanges compris** !    
Sauvegarder le fichier exporté dans le dossier de l'index.html sous le nom "Tokens.csv".   
  
## Pour un fonctionnement manuel :  
__Il faut modifier le fichier "[configScreener.js](libs/configScreener.js)" après l'entête suivante :__  
  ////////////////////////////////////////////////////////////////////////////////////////////////////  
  // LISTE DES COINS A MODIFIER  
  ////////////////////////////////////////////////////////////////////////////////////////////////////  
### Capture du fichier "[configScreener.js](libs/configScreener.js)" :  
![Capture Configuration Crypto-Screener](https://raw.githubusercontent.com/Youpit44/cryptoscreener/master/docs/Config.PNG)  
  
1) Complèter la/les lignes suivantes pour ajouter vous coins type Bitcoin, Ethereum, Neo, Waves, ..... un par ligne comme l'exemple ci-dessus : 
  *lstCoins.push(["__BITCOIN__", "__coinmarketcap__", __0__, __""__, __0.09__, __""__]);*  
**BITCOIN** : nom du coin à suivre  
**coinmarketcap** : api à utiliser  
**O** : ne sert plus  
**""** : ne rien mettre pour le moment  
**0.09** : nombre de coins que vous possedez (0 si vous ne voulez pas utiliser cette option)  
**""** :  mettre la clé publique de votre wallet (sert pour recupérer les balances de vos Wallets, uniquement **NEO** et **ArcTic-Coin** pour le moment)    
           
2) Complèter la/les lignes suivantes pour ajouter vous tokens compatible ERC20 d'Ethereum, un par ligne comme l'exemple ci-dessus : 
  *lstTokens.push(["__HAVVEN__", "__coinmarketcap__", __0__, __""__, __200.50__]);*  
**HAVVEN** : nom du token à suivre  
**coinmarketcap** : api à utiliser  
**O** : ne sert plus  
**""** : ne rien mettre pour le moment  
**200.50** : nombre de tokens que vous possedez (0 si vous ne voulez pas utiliser cette option)  
  
### Le mode semi-automatique fonctionne conjointement au mode manuel. Vous pouvez suivre vos Tokens ERC20 exportés de DeltaBalance et d'autres coins ou tokens que vous n'avez pas sur votre wallet ethereum ou d'autres wallets.   
  
Si vous désirez des modifications, n'hesitez pas à laissez une issue pour me notifier de votre demande, évolution ou même support.  
@Youpit  
Eth: 0x2a0bc682Cf0A70E4489089E550383dC9F28aF34B
