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
