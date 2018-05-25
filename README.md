# CryptoScreener - Tatooine  
![Capture Crypto-Screener](https://raw.githubusercontent.com/Youpit44/cryptoscreener/tatooine/docs/Capture.PNG)  
## ATTENTION : Nouvelle version !! Refonte complète de l'interface et du moteur de traitement.
  
    
**Troisième essai** du dashboard de suivi des cryptos-monnaies suivant un choix défini.  
Il utise les API de coinmarcketcap.com, ForkDelta, Infura, Ethplorer pour les tokens ERC20, l'API de NEO et d'ArcTic. D'autres suivront suivant les besoins.  
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
  
---
## Pour fonctionner correctement :  
### Il fortement conseiller d'utiliser le navigateur "**Chrome**" et d'ajouter l'extension "Web-Server local" disponible sur le [Store de Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb)  
et d'ajouter les options suivantes au racourcci  :  
  **--allow-file-access-from-files**  
  **--disable-web-security**  
Ces options permettent le chargement des données en local. Le syndrome du "**cross domain**" peut aussi survenir avec certain navigateur autre que "**Chrome**". Pour limiter cet effet vous pouvez télécharger la base [Coinmarketcap.com](https://api.coinmarketcap.com/v1/ticker/?limit=0&convert=EUR) au format JSON et la sauvegarder sous le nom de "[cmc.json](https://api.coinmarketcap.com/v1/ticker/?limit=0&convert=EUR)" dans le dossier principal avec l'index.html.  
  
---
Si vous désirez des modifications, n'hesitez pas à laissez une issue pour me notifier de votre demande, évolution ou même support.  
@Youpit  
**Eth: 0x2a0bc682Cf0A70E4489089E550383dC9F28aF34B**
