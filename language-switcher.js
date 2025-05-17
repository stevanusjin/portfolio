function changeLanguage() {
  const lang = document.getElementById('languageSelector').value;
  if (lang === 'en') {
    window.location.href = 'index.html'; // English page
  } else if (lang === 'kr') {
    window.location.href = 'index_kr.html'; // Korean page
  }
}

window.onload = () => {
  if (window.location.pathname.includes('index_kr.html')) {
    document.getElementById('languageSelector').value = 'kr';
  } else {
    document.getElementById('languageSelector').value = 'en';
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const languageSelectorContainer = document.getElementById("languageSelector").parentElement;

  // Select ALL anchor tags that link to sections (both mobile and desktop)
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const href = link.getAttribute("href");

      if (href === "#header") {
        languageSelectorContainer.style.display = "block";
      } else {
        languageSelectorContainer.style.display = "none";
      }
    });
  });
});
