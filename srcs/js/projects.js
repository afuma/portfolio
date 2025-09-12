// Récupération des données depuis le fichier de configuration
let projectsData = [];

// Fonction pour initialiser les données
function initializeProjectsData() {
    if (window.ProjectsConfig && window.ProjectsConfig.data) {
        projectsData = [...window.ProjectsConfig.data];
    } else {
        console.error('Configuration des projets non trouvée. Assurez-vous que projects-config.js est chargé.');
        projectsData = [];
    }
}

// Fonction pour créer une carte de projet
function createProjectCard(project) {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    
    // Déterminer le contenu média (image ou vidéo)
    const mediaContent = project.video 
        ? `<video src="${project.video}" controls class="project-video"></video>`
        : `<img src="${project.image}" alt="${project.title}" class="project-image">`;
    
    // Créer le contenu de la carte
    const cardContent = project.hasProjectPage && project.projectLink
        ? `
            <a href="${project.projectLink}" class="project-link">
                <div class="project-media">
                    ${mediaContent}
                </div>
                <div class="project-content">
                    ${createProjectContentHTML(project)}
                </div>
            </a>
        `
        : `
            <div class="project-media">
                ${mediaContent}
            </div>
            <div class="project-content">
                ${createProjectContentHTML(project)}
            </div>
        `;
    
    projectCard.innerHTML = cardContent;
    return projectCard;
}

// Fonction pour créer le contenu HTML d'un projet
function createProjectContentHTML(project) {
    return `
        <h3 class="project-title">${project.title}</h3>
        <div class="project-objective">
            <h4>Objectif</h4>
            <p>${project.objective}</p>
        </div>
        <div class="project-skills">
            <h4>Compétences développées</h4>
            <p>${project.skills}</p>
        </div>
        <div class="project-feedback">
            <div class="liked">
                <h5><i class="fas fa-thumbs-up"></i> Ce que j'ai apprécié</h5>
                <p>${project.liked}</p>
            </div>
            <div class="disliked">
                <h5><i class="fas fa-thumbs-down"></i> Défis rencontrés</h5>
                <p>${project.disliked}</p>
            </div>
        </div>
        <div class="project-links">
            <a href="${project.githubLink}" class="btn btn-small" target="_blank">
                <i class="fab fa-github"></i> GitHub
            </a>
        </div>
    `;
}

/* code dans project-links above when demos accessible:
            <a href="${project.demoLink}" class="btn btn-small btn-secondary" target="_blank">
                <i class="fas fa-external-link-alt"></i> Demo
            </a>
*/

// Fonction pour rendre tous les projets
function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    if (!projectsGrid) {
        console.error('Container .projects-grid non trouvé');
        return;
    }
    
    // Vider le container
    projectsGrid.innerHTML = '';
    
    // Ajouter chaque projet
    projectsData.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

// Fonction pour ajouter un nouveau projet
function addProject(projectData) {
    // Générer un ID unique
    const newId = Math.max(...projectsData.map(p => p.id)) + 1;
    const newProject = { ...projectData, id: newId };
    
    // Ajouter aux données
    projectsData.push(newProject);
    
    // Re-rendre les projets
    renderProjects();
    
    return newProject;
}

// Fonction pour supprimer un projet
function removeProject(projectId) {
    const index = projectsData.findIndex(p => p.id === projectId);
    if (index !== -1) {
        projectsData.splice(index, 1);
        renderProjects();
        return true;
    }
    return false;
}

// Fonction pour mettre à jour un projet
function updateProject(projectId, updatedData) {
    const index = projectsData.findIndex(p => p.id === projectId);
    if (index !== -1) {
        projectsData[index] = { ...projectsData[index], ...updatedData };
        renderProjects();
        return projectsData[index];
    }
    return null;
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    initializeProjectsData();
    renderProjects();
});

// Exposer les fonctions globalement pour utilisation externe
window.ProjectManager = {
    renderProjects,
    addProject,
    removeProject,
    updateProject,
    getProjects: () => [...projectsData]
};
