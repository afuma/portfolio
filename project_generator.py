#!/usr/bin/env python3
"""
Générateur automatique de pages de projet
Utilise un fichier JSON pour créer une nouvelle page HTML basée sur le template
"""

import json

def load_project_data(json_file):
    """Charge les données du projet depuis un fichier JSON"""
    try:
        with open("data/" + json_file, 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        print(f"❌ Erreur: Le fichier {json_file} n'existe pas")
        return None
    except json.JSONDecodeError as e:
        print(f"❌ Erreur JSON: {e}")
        return None

def load_template():
    """Charge le template HTML"""
    template_path = "srcs/html/projects/projet-template.html"
    try:
        with open(template_path, 'r', encoding='utf-8') as f:
            return f.read()
    except FileNotFoundError:
        print(f"❌ Erreur: Le template {template_path} n'existe pas")
        return None

def generate_skill_tags(stack_list):
    """Génère les tags HTML pour la stack technique"""
    tags = []
    for skill in stack_list:
        tags.append(f'<span class="skill-tag">{skill}</span>')
    return '\n'.join(tags)

def generate_list_items(items_list):
    """Génère une liste HTML à partir d'une liste d'éléments"""
    items = []
    for item in items_list:
        items.append(f"• {item}<br>")
    return '\n'.join(items)

def replace_placeholders(template, project_data):
    """Remplace les placeholders dans le template avec les données du projet"""
    
    # Génération des éléments dynamiques
    skill_tags = generate_skill_tags(project_data['stack_list'])
    challenges_list = generate_list_items(project_data['challenges_met_list'])
    results_list = generate_list_items(project_data['results_list'])
    
    # Dictionnaire des remplacements
    replacements = {
        '[PROJECT_TITLE]': project_data['title'],
        '[TAGLINE]': project_data['tagline'],
        '[CONTEXT]': project_data['context'],
        '[GOAL]': project_data['goal'],
        '[IMPACT]': project_data['impact'],
        '[IMAGE_PREVIEW_PATH]': project_data['img_preview_path'],
        '[GITHUB_REPO]': project_data.get('github_url', 'https://github.com/afuma/'),
        '[VIDEO_PROJECT_PATH]': project_data.get('video_path', '../../videos/demo.mp4'),
        '[TAGS]': skill_tags,
        '[CHALLENGES]': challenges_list,
        '[RESULTS]': results_list
    }
    
    # Application des remplacements
    result = template
    for placeholder, replacement in replacements.items():
        result = result.replace(placeholder, replacement)
    
    return result

def create_project_file(project_data, output_content):
    """Crée le fichier HTML du projet"""
    
    # Génération du nom de fichier à partir du titre
    filename = project_data['title'].lower()
    filename = filename.replace(' ', '-')
    filename = filename.replace('é', 'e').replace('è', 'e').replace('à', 'a')
    filename = ''.join(c for c in filename if c.isalnum() or c == '-')
    filename = f"{filename}.html"
    
    # Chemin de sortie
    output_path = f"srcs/html/projects/{filename}"
    
    # Création du fichier
    try:
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(output_content)
        print(f"✅ Page créée avec succès: {output_path}")
        return filename
    except Exception as e:
        print(f"❌ Erreur lors de la création du fichier: {e}")
        return None

def main():
    """Fonction principale"""
    print("🚀 Générateur de pages de projet")
    print("=" * 40)
    
    # Demander le fichier JSON
    json_file = input("📁 Nom du fichier JSON (ex: mon-projet.json): ").strip()
    
    if not json_file.endswith('.json'):
        json_file += '.json'
    
    # Charger les données
    print(f"📖 Chargement des données depuis {json_file}...")
    project_data = load_project_data(json_file)
    if not project_data:
        return
    
    # Charger le template
    print("📄 Chargement du template...")
    template = load_template()
    if not template:
        return
    
    # Générer le contenu
    print("⚙️  Génération du contenu...")
    output_content = replace_placeholders(template, project_data)
    
    # Créer le fichier
    print("💾 Création du fichier HTML...")
    filename = create_project_file(project_data, output_content)
    
    if filename:
        print("\n🎉 Génération terminée avec succès!")
        print(f"📂 Fichier créé: srcs/html/projects/{filename}")
        print(f"🌐 Titre: {project_data['title']}")
        print(f"📝 Tagline: {project_data['tagline']}")
    else:
        print("\n❌ Échec de la génération")

if __name__ == "__main__":
    main()
