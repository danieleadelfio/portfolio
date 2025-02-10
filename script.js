let currentLanguage = 'it'; // Lingua predefinita

const translations = {
    it: {},
    en: {}
};

// Carica le traduzioni
async function loadTranslations() {
    const responseIt = await fetch('lang/it.json');
    const responseEn = await fetch('lang/en.json');
    translations.it = await responseIt.json();
    translations.en = await responseEn.json();
}

// Cambia la lingua
function changeLanguage(lang) {
    currentLanguage = lang;
    updateContent();
}

// Aggiorna il contenuto della pagina
function updateContent() {
    const langData = translations[currentLanguage];
    document.getElementById('header-title').textContent = langData.headerTitle;
    document.getElementById('nav-info').textContent = langData.navInfo;
    document.getElementById('nav-experience').textContent = langData.navExperience;
    document.getElementById('nav-nav-technologies').textContent = langData.navTechnologies;
    document.getElementById('nav-cv').textContent = langData.navCv;
    document.getElementById('info-title').textContent = langData.infoTitle;
    document.getElementById('info-text').textContent = langData.infoText;
    document.getElementById('experience-title').textContent = langData.experienceTitle;
    document.getElementById('experience-list').innerHTML = langData.experienceList;
    document.getElementById('projects-title').textContent = langData.projectsTitle;
    document.getElementById('project1-title').textContent = langData.project1Title;
    document.getElementById('project1-tech').textContent = langData.project1Tech;
    document.getElementById('project1-desc').textContent = langData.project1Desc;
    document.getElementById('project1-link').textContent = langData.project1Link;
    document.getElementById('technologies-title').textContent = langData.technologiesTitle;
    document.getElementById('programming-languages').textContent = langData.programmingLanguages;
    document.getElementById('framework-libraries').textContent = langData.frameworkAndLibraries;
    document.getElementById('dev-tools').textContent = langData.devTools;
    document.getElementById('db-used').textContent = langData.dbUsed;
    document.getElementById('cloud-dev-ops').textContent = langData.cloudDevOps;
    document.getElementById('code-management').textContent = langData.codeManagement;
    document.getElementById('testing').textContent = langData.testing;
    document.getElementById('others').textContent = langData.others;
    document.getElementById('cv-title').textContent = langData.cvTitle;
    document.getElementById('cv-text').textContent = langData.cvText;
    document.getElementById('cv-italian').textContent = langData.cvItalian;
    document.getElementById('cv-english').textContent = langData.cvEnglish;
    document.getElementById('footer-text').textContent = langData.footerText;
}

// Carica le traduzioni all'avvio
loadTranslations().then(() => {
    updateContent(); // Imposta la lingua predefinita
});
