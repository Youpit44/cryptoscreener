# cryptoscreener
## ATTENTION : Nouvelle version !! la partie configuration a beaucoup changée et pour le moment n'est pas encore documentée. Je le fait rapidement.  
### Nouveautés :  
  Chargement de l'export du wallet ETH de https://deltabalances.github.io/   
  Traitement séparé entre les Coins (type BTC, ETH, NEO) et les Tokens (type Erc20, Neo, ...)  
  Réductions de l'utilisation de l'API de CCC  
  Mode Online ou Offline  
  
---    
Premier essai de dashboard de suivi des cryptos-monnaies suivant un choix défini.  
Il utise dans un premier temps l'api de coinmarcketcap.com, d'autres suivront suivant les besoins.  
  
L'utilisation est simple, il faut juste copier l'index.html dans un dossier et cliquer dessus.  
Votre navigateur par défaut s'ouvrira sur la page avec des données de tests.  
  
Il faut modifier le fichier index.html après l'entête suivante :  
  ////////////////////////////////////////////////////////////////////////////////////////////////////  
  // VARIABLE A MODIFIER  
  ////////////////////////////////////////////////////////////////////////////////////////////////////  
Et complèter la/les lignes suivantes pour ajouter vous coins ou tokens à suivre.  
  lstTokens.push(["BITCOIN", "coinmarketcap", 1, "", 0.09]);  
BITCOIN : nom du coin ou token à suivre  
coinmarketcap : api à utiliser  
1 : numéro de l'icone representant le coin ou token (à recupérer dans la page de coinmarcketcap.com)  
"" : ne rien mettre pour le moment  
0.09 : nombre de coins que vous possedez (0 si vous ne voulez pas utiliser cette option)  
  
  
  
Si vous désirez des modifications, n'hesitez pas à laissez une issue pour me notifier de votre demande, évolution ou même support.  
@Youpit  
Eth: 0x2a0bc682Cf0A70E4489089E550383dC9F28aF34B
