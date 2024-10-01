window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".navbar").style.backgroundColor = "#000000";
  } else {
    document.querySelector(".navbar").style.backgroundColor = "transparent";
  }
}

var userLang = localStorage.getItem('lang') || navigator.language || navigator.userLanguage;

document.getElementById('language-selector').onclick = function switchWebLanguege() {
  if (userLang === 'en') {
    localStorage.setItem('lang', 'vi');
  } else {
    localStorage.setItem('lang', 'en');
  }
  console.log('Language changed to ' + localStorage.getItem('lang'));
  window.location.href = '/';
}
document.getElementById('language-selector-main').onclick = function switchWebLanguege() {
  if (userLang === 'en') {
    localStorage.setItem('lang', 'vi');
  } else {
    localStorage.setItem('lang', 'en');
  }
  console.log('Language changed to ' + localStorage.getItem('lang'));
  window.location.href = '/';
}

if (userLang !== 'vi' && !window.location.href.includes('en')) {
  window.location.href = 'en';
}