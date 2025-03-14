# 🚀 Démarrage Rapide

<br/>

## Prérequis

Avant de commencer ce workshop, assurez-vous d'avoir installé :

- **Node.js** 
- **pnpm** (Arrêtez avec NPM, par pitié ! c'est de la merde)
- **JS / TypeScript** (connaissance requise)

<br/>

## ⚙️ Prérequis

1. **Configuration de l'Environnement**
   ```bash
   cp .env.example .env
   ```

2. **Configuration du Provider AI**
   Dans le fichier `.env`, ajoutez votre clé API:

<br/>

## Installation

1. **Clonez le repository**
```bash
# Version final du plugin
git clone https://github.com/MathysCogne/workshop_elizaos_42blockchain

# ou juste la struture du plugin vierge afin de pratiquer !
git clone -b base https://github.com/MathysCogne/workshop_elizaos_42blockchain
```

3. **Installez les dépendances**
```bash
pnpm install --no-frozen-lockfile
```

## Premier Lancement

1. **Build du projet**
```bash
pnpm build
```

2. **Démarrage du client web**
```bash
pnpm start:client
```

3. **Démarrage de l'agent**
```bash
pnpm start --character="characters/workshop.character.json"
```

<br/>

## Vérification de l'Installation ((Si vous avez installé la version finale du plugin)

Pour vérifier que tout fonctionne correctement, envoyer ces message a l'agent IA :
```
1. Salut Bob !
--
2. Quel est le solde du wallet [addr wallet xpr] ?
```

Vous devriez recevoir une réponse contenant le solde du wallet.

<br/>

## Prochaines Étapes

- [🎭 Configurez votre agent ia](./character-config.md)
- [📁 Découvrez la structure du plugin](./project-structure.md)
- [🔧 Implémentez votre premier plugin](./plugin-implementation.md)
- [🧪 Test et Déploiement](./testing-deployment.md)

  <br/>

  [retour a la home](../)
