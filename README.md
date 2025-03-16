# Bank Application

## Description

Cette application de banque en ligne permet aux utilisateurs de visualiser leur solde, consulter leurs relevés, et voir l'historique des transactions. L'interface est construite en React et utilise Material-UI pour le stylisme.

## Installation

1. Clonez le dépôt

   ```bash
   git clone https://github.com/votre-repo/bank-application.git
Accédez au dossier du projet

   ```bash
cd bank-application/frontend
```
Installez les dépendances
   ```bash
npm install
```
Usage
Pour démarrer l'application en mode développement, utilisez la commande suivante :
   ```bash
npm start
```
Ouvrez http://localhost:3000 pour voir l'application dans votre navigateur.

Structure du projet
frontend/
Voici un exemple de fichier README pour votre projet "bank-kata". Ce README fournit des informations sur le projet, comment le configurer, ainsi que les instructions pour l'exécution et le développement.

---

# Bank Kata

## Description

Bank Kata est une application de gestion bancaire créée avec React et stylisée avec Material-UI. Elle permet aux utilisateurs de voir leur solde, voir leurs relevés et consulter l'historique des transactions.

## Installation

### Prérequis

- Node.js
- npm (ou yarn)

### Étapes

1. Clonez le repository :

```bash
git clone <your-repository-url>
cd bank-kata
```
Installez les dépendances :
```bash
npm install
```
Démarrez l'application :
```bash
npm start
```
Structure des fichiers
Le projet est structuré comme suit :
```
bank-kata/
├── package.json
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Balance.tsx
│   │   ├── History.tsx
│   ├── pages/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Balance.tsx
│   │   ├── History.tsx
│   ├── context/
│   │   └── BankContext.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   ├── App.tsx
│   ├── index.tsx
└── package.json
```
## Usage

### Composants

- **Header.tsx** : Affiche l'en-tête de l'application.
- **Balance.tsx** : Affiche le solde du compte.
- **History.tsx** : Affiche l'historique des transactions.


### Pages

- **Home.tsx** : Page d'accueil de l'application, contenant les composants `Balance` et `History`.

### Services

- **bankService.ts** : Fournit les fonctions pour récupérer les données de l'API.

## Thème

Le thème de l'application est configuré dans le fichier `App.tsx` en utilisant `createTheme` de Material-UI :

```typescript
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff4081',
    },
  },
  typography: {
    h6: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
  },
});
```
## Contributions
Les contributions sont les bienvenues ! Veuillez ouvrir une issue pour discuter de ce que vous souhaitez changer.

## Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus d'informations.

## Contact
Pour toute question, vous pouvez me contacter à votre-email@example.com.