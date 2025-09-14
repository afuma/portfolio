/**
 * Dark Mode Simple - Gestionnaire de thème pour le portfolio
 */

// Gestionnaire simple du dark mode
const DarkMode = {
    init() {
        this.button = document.getElementById('theme-toggle-btn');
        this.loadTheme();
        this.setupEvents();
    },

    setupEvents() {
        if (this.button) {
            this.button.addEventListener('click', () => this.toggle());
        }
    },

    toggle() {
        const isDark = document.documentElement.hasAttribute('data-theme');
        
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    },

    loadTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }
};

// Initialiser quand le DOM est prêt
document.addEventListener('DOMContentLoaded', () => DarkMode.init());
