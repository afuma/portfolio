# Portfolio Professionnel

Un portfolio moderne et responsive créé avec HTML, CSS et JavaScript vanilla.

## 🚀 Fonctionnalités

- **Design moderne et responsive** - S'adapte à tous les écrans
- **Navigation fluide** - Menu hamburger pour mobile avec animations
- **Section projets structurée** - Template prêt pour vos projets GitHub
- **Animations au scroll** - Effets visuels modernes
- **Optimisé pour les performances** - Lazy loading, debouncing
- **Accessibilité** - Focus states et navigation clavier

## 📁 Structure du projet

```
portfolio/
├── index.html              # Page principale
├── srcs/
│   ├── css/
│   │   └── style.css       # Styles CSS
│   ├── js/
│   │   └── script.js       # JavaScript
│   └── html/               # (pour d'autres pages si nécessaire)
├── img/                    # Images du portfolio
├── videos/                 # Vidéos des projets
└── README.md              # Ce fichier
```

## 🎨 Personnalisation

### 1. Informations personnelles

Dans `index.html`, remplacez :
- `Votre Nom` par votre nom
- `Développeur Full Stack` par votre titre
- Les textes de présentation dans la section "À propos"
- Les informations de contact

### 2. Projets

Pour chaque projet dans la section `#projets`, remplissez :

```html
<div class="project-card">
    <div class="project-media">
        <!-- Pour une image -->
        <img src="img/votre-projet.jpg" alt="Nom du projet" class="project-image">
        
        <!-- OU pour une vidéo -->
        <video src="videos/votre-projet.mp4" controls class="project-video"></video>
    </div>
    <div class="project-content">
        <h3 class="project-title">Nom de votre projet</h3>
        
        <div class="project-objective">
            <h4>Objectif</h4>
            <p>Décrivez l'objectif principal de ce projet</p>
        </div>
        
        <div class="project-skills">
            <h4>Compétences développées</h4>
            <p>Listez les compétences techniques et soft skills acquises</p>
        </div>
        
        <div class="project-feedback">
            <div class="liked">
                <h5><i class="fas fa-thumbs-up"></i> Ce que j'ai apprécié</h5>
                <p>Aspects positifs du projet</p>
            </div>
            <div class="disliked">
                <h5><i class="fas fa-thumbs-down"></i> Défis rencontrés</h5>
                <p>Difficultés ou aspects moins appréciés</p>
            </div>
        </div>
        
        <div class="project-links">
            <a href="https://github.com/votre-username/votre-repo" class="btn btn-small" target="_blank">
                <i class="fab fa-github"></i> GitHub
            </a>
            <a href="https://votre-demo.com" class="btn btn-small btn-secondary" target="_blank">
                <i class="fas fa-external-link-alt"></i> Demo
            </a>
        </div>
    </div>
</div>
```

### 3. Compétences

Modifiez les compétences dans la section `#competences` selon vos technologies.

### 4. Images

Ajoutez vos images dans le dossier `img/` :
- `profile.jpg` - Votre photo de profil
- `project1.jpg`, `project2.jpg`, etc. - Images de vos projets

### 5. Vidéos

Ajoutez vos vidéos dans le dossier `videos/` :
- `project1.mp4`, `project2.mp4`, etc. - Vidéos de démonstration

### 6. Couleurs et thème

Dans `srcs/css/style.css`, modifiez les variables CSS :

```css
:root {
    --primary-color: #2563eb;    /* Couleur principale */
    --secondary-color: #64748b;  /* Couleur secondaire */
    --accent-color: #f59e0b;     /* Couleur d'accent */
    /* ... autres variables */
}
```

## 🛠️ Installation et utilisation

1. **Clonez ou téléchargez** ce portfolio
2. **Personnalisez** le contenu selon vos besoins
3. **Ajoutez vos images** dans le dossier `img/`
4. **Ouvrez** `index.html` dans votre navigateur

## 📱 Responsive Design

Le portfolio est entièrement responsive et s'adapte à :
- **Desktop** (1200px+)
- **Tablette** (768px - 1199px)
- **Mobile** (jusqu'à 767px)

## ⚡ Optimisations incluses

- **Lazy loading** des images
- **Debouncing** des événements de scroll
- **Animations CSS** optimisées
- **Code JavaScript** modulaire
- **Compression** des assets recommandée

## 🎯 Conseils pour vos projets

### Structure recommandée pour chaque projet :

1. **Titre clair** - Nom explicite du projet
2. **Objectif précis** - Problème résolu ou besoin adressé
3. **Compétences développées** - Technologies et soft skills
4. **Retour d'expérience** :
   - Ce qui vous a plu (apprentissages, défis relevés)
   - Difficultés rencontrées (et comment vous les avez surmontées)
5. **Liens** - GitHub + démo en ligne si possible

### Exemples de compétences à mentionner :

**Techniques :**
- Langages de programmation
- Frameworks et librairies
- Bases de données
- Outils de développement
- Méthodologies (Agile, TDD, etc.)

**Soft skills :**
- Résolution de problèmes
- Travail en équipe
- Gestion de projet
- Communication
- Apprentissage autonome

## 🚀 Déploiement

### GitHub Pages
1. Uploadez votre portfolio sur GitHub
2. Activez GitHub Pages dans les paramètres du repository
3. Votre portfolio sera accessible à `https://votre-username.github.io/nom-du-repo`

### Netlify
1. Glissez-déposez votre dossier sur [Netlify](https://netlify.com)
2. Votre site sera déployé automatiquement

### Vercel
1. Connectez votre repository GitHub à [Vercel](https://vercel.com)
2. Déploiement automatique à chaque commit

## 📞 Support

Si vous rencontrez des problèmes ou avez des questions, n'hésitez pas à :
- Consulter la documentation des technologies utilisées
- Rechercher des solutions sur Stack Overflow
- Adapter le code selon vos besoins spécifiques

## 📄 Licence

Ce portfolio est libre d'utilisation pour vos projets personnels et professionnels.

---

**Bonne chance pour votre portfolio ! 🎉**
# portfolio
