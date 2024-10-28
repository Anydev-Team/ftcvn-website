window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".navbar").style.backgroundColor = "#000000";
  } else {
    document.querySelector(".navbar").style.backgroundColor = "transparent";
  }
}

if (localStorage.getItem('lang') === null) {
  localStorage.setItem('lang', navigator.language || navigator.userLanguage);
}

var userLang = localStorage.getItem('lang') || navigator.language || navigator.userLanguage;
// // function switchWebLanguege() {
// //   console.log('Current language: ' + userLang);
// //   if (userLang === 'en') {
// //     localStorage.setItem('lang', 'vi');
// //   } else {
// //     localStorage.setItem('lang', 'en');
// //   }
// //   console.log('Language changed to ' + localStorage.getItem('lang'));
// //   window.location.href = '/ftcvn-website';
// // }

// document.getElementById('language-selector').onclick = switchWebLanguege;

// document.getElementById('language-selector-main').onclick = switchWebLanguege;

if (userLang !== 'vi' && !window.location.href.includes('en')) {
  window.location.href = 'en';
}