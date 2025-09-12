# 🚀 Générateur Automatique de Pages de Projet

Ce système permet de créer automatiquement des pages de projet HTML à partir d'un fichier JSON, en utilisant le template moderne que nous avons développé.

## 📋 Prérequis

- Python 3.6 ou plus récent
- Les fichiers du portfolio dans la structure actuelle

## 🎯 Utilisation

### 1. Créer un fichier JSON avec les données du projet

Créez un fichier JSON (ex: `mon-nouveau-projet.json`) avec la structure suivante :

```json
{
  "title": "Nom de votre projet",
  "tagline": "Description courte et accrocheuse",
  "context": "Pourquoi avez-vous créé ce projet ?",
  "goal": "Quel était l'objectif principal ?",
  "impact": "Quel impact/résultat a eu le projet ?",
  "img_preview_path": "../../img/votre-image.png",
  "github_url": "https://github.com/votre-username/votre-repo",
  "demo_url": "https://votre-demo.com",
  "video_path": "../../videos/votre-video.mp4",
  "stack_list": [
    "Technologie 1",
    "Technologie 2",
    "Technologie 3"
  ],
  "challenges_met_list": [
    "Défi technique 1",
    "Défi technique 2",
    "Défi technique 3"
  ],
  "results_list": [
    "Résultat obtenu 1",
    "Résultat obtenu 2",
    "Résultat obtenu 3"
  ]
}
```

### 2. Lancer le générateur

```bash
python3 project_generator.py
```

Le script vous demandera le nom de votre fichier JSON et générera automatiquement la page HTML.

### 3. Résultat

Une nouvelle page sera créée dans `srcs/html/projects/` avec un nom basé sur le titre de votre projet.

## 📁 Structure des Champs JSON

| Champ | Type | Description | Obligatoire |
|-------|------|-------------|-------------|
| `title` | String | Titre principal du projet | ✅ |
| `tagline` | String | Sous-titre accrocheur | ✅ |
| `context` | String | Contexte de création du projet | ✅ |
| `goal` | String | Objectif principal | ✅ |
| `impact` | String | Impact/résultats obtenus | ✅ |
| `img_preview_path` | String | Chemin vers l'image d'aperçu | ✅ |
| `github_url` | String | URL du repository GitHub | ❌ |
| `demo_url` | String | URL de la démo en ligne | ❌ |
| `video_path` | String | Chemin vers la vidéo de démo | ❌ |
| `stack_list` | Array | Liste des technologies utilisées | ✅ |
| `challenges_met_list` | Array | Liste des défis techniques relevés | ✅ |
| `results_list` | Array | Liste des résultats obtenus | ✅ |

## 🎨 Fonctionnalités du Template

Le template généré inclut automatiquement :

- ✅ **Design moderne** : Section hero pleine hauteur avec dégradé bleu
- ✅ **Popup vidéo** : Lecture de démo avec fermeture intuitive
- ✅ **Responsive** : Adaptation parfaite sur tous les écrans
- ✅ **Stack technique** : Affichage élégant des technologies
- ✅ **Navigation** : Liens vers GitHub et démo
- ✅ **Cohérence visuelle** : Style uniforme avec le portfolio

## 📝 Exemple Complet

Voir le fichier `exemple-projet.json` pour un exemple complet avec toutes les données remplies.

## 🔧 Personnalisation

### Modifier le Template

Pour personnaliser le template de base, éditez le fichier :
```
srcs/html/projects/projet-template.html
```

### Ajouter de Nouveaux Champs

1. Ajoutez le champ dans votre JSON
2. Modifiez la fonction `replace_placeholders()` dans `project_generator.py`
3. Ajoutez le placeholder correspondant dans le template

## 🚨 Conseils d'Utilisation

### Images et Médias
- Placez vos images dans le dossier `img/`
- Placez vos vidéos dans le dossier `videos/`
- Utilisez des chemins relatifs depuis le dossier `projects/`

### Nommage des Fichiers
- Le nom du fichier HTML est généré automatiquement à partir du titre
- Les caractères spéciaux sont automatiquement convertis
- Exemple : "Mon Super Projet" → `mon-super-projet.html`

### Bonnes Pratiques
- Gardez les taglines courtes et impactantes
- Utilisez des listes concises pour les défis et résultats
- Optimisez vos images pour le web (format WebP recommandé)
- Testez vos liens GitHub et démo avant génération

## 🐛 Dépannage

### Erreurs Communes

**"Le fichier JSON n'existe pas"**
- Vérifiez que le fichier est dans le même dossier que le script
- Vérifiez l'orthographe du nom de fichier

**"Erreur JSON"**
- Validez votre JSON avec un outil en ligne
- Vérifiez les virgules et guillemets

**"Le template n'existe pas"**
- Assurez-vous que `srcs/html/projects/projet-template.html` existe
- Lancez le script depuis la racine du portfolio

## 🎉 Résultat Final

Après génération, votre nouvelle page de projet sera :
- ✅ Entièrement fonctionnelle
- ✅ Responsive sur tous les appareils  
- ✅ Intégrée au style du portfolio
- ✅ Prête à être déployée

---

*Générateur créé pour automatiser la création de pages de projet avec un design moderne et professionnel.*
