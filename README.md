# cryptoscreener
## ATTENTION : Nouvelle version !! la partie configuration a beaucoup changée et pour le moment n'est pas encore documentée. Je le fait rapidement.  
### Nouveautés :  
  *Vérification des tokens ERC20 non reconnu sur CMC  
  *Utilisation des cookies pour stocker les données des tokens  
  *Réductions de l'appel de l'API CMC à 15 min  
  *Utilisation de l'API de ForkDelta  
  *Chargement de l'export du wallet ETH de https://deltabalances.github.io/   
  *Traitement séparé entre les Coins (type BTC, ETH, NEO) et les Tokens (type Erc20, Neo, ...)  
  *Mode Online ou Offline  
  
---    
Premier essai de dashboard de suivi des cryptos-monnaies suivant un choix défini.  
Il utise dans un premier temps l'api de coinmarcketcap.com, d'autres suivront suivant les besoins.  
  
L'utilisation est simple, il faut juste copier l'index.html dans un dossier et cliquer dessus.  
Votre navigateur par défaut s'ouvrira sur la page avec des données de tests.  
  
__Il faut modifier le fichier "libs/configScreener.js" après l'entête suivante :__  
  ////////////////////////////////////////////////////////////////////////////////////////////////////  
  // LISTE DES COINS A MODIFIER  
  ////////////////////////////////////////////////////////////////////////////////////////////////////  
1) Complèter la/les lignes suivantes pour ajouter vous coins type Bitcoin, Ethereum, Neo, Waves, ..... un par ligne : 
  *lstCoins.push(["__BITCOIN__", "__coinmarketcap__", __0__, __""__, __0.09__, __""__]);*  
**BITCOIN** : nom du coin à suivre  
**coinmarketcap** : api à utiliser  
**O** : ne sert plus  
**""** : ne rien mettre pour le moment  
**0.09** : nombre de coins que vous possedez (0 si vous ne voulez pas utiliser cette option)  
**""** : sert pour recupérer les balances de vos Wallets (prochaine version)  
  
2) Complèter la/les lignes suivantes pour ajouter vous tokens compatible ERC20 d'Ethereum, un par ligne : 
  *lstTokens.push(["__HAVVEN__", "__coinmarketcap__", __0__, __""__, __200.50__]);*  
**HAVVEN** : nom du token à suivre  
**coinmarketcap** : api à utiliser  
**O** : ne sert plus  
**""** : ne rien mettre pour le moment  
**200.50** : nombre de tokens que vous possedez (0 si vous ne voulez pas utiliser cette option)  

  
Si vous désirez des modifications, n'hesitez pas à laissez une issue pour me notifier de votre demande, évolution ou même support.  
@Youpit  
Eth: 0x2a0bc682Cf0A70E4489089E550383dC9F28aF34B
