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
  const navLinks = document.querySelectorAll(".nav-menu a");
  const languageSelectorContainer = document.getElementById("languageSelector").parentElement;

  navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");

      if (href === "#header") {
        // If Home button is clicked, show the language selector
        languageSelectorContainer.style.display = "block";
      } else {
        // Otherwise, hide it
        languageSelectorContainer.style.display = "none";
      }
    });
  });
});
