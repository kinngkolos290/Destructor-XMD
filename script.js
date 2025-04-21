
function setLang(lang) {
  if (lang === 'fr') {
    document.querySelector('h1').textContent = "Bienvenue sur Destructor-XMD";
    document.querySelectorAll('.btn')[0].textContent = "WhatsApp";
    document.querySelectorAll('.btn')[1].textContent = "GitHub";
    document.querySelectorAll('.btn')[2].textContent = "Scanner une session";
    document.querySelectorAll('.btn')[3].textContent = "Accès Admin";
  } else {
    document.querySelector('h1').textContent = "Welcome to Destructor-XMD";
    document.querySelectorAll('.btn')[0].textContent = "WhatsApp";
    document.querySelectorAll('.btn')[1].textContent = "GitHub";
    document.querySelectorAll('.btn')[2].textContent = "Scan Session";
    document.querySelectorAll('.btn')[3].textContent = "Admin Access";
  }
}
