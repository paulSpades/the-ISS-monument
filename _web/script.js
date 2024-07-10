// this needs to change if repository is moved
const baseURL = 'https://paulSpades.github.io/the-ISS-monument';

fetchDocBody(false, () => {






});


function fetchDocBody(lang, callback){
  const doc = lang ? `${baseURL}/translations/${lang}/the-iss-monument.html` : `${baseURL}/the-iss-monument.html`;

  fetch(doc)
    .then((res) => {
      return res.text();
    })
    .then((html) => {
      document.getElementById('mainContent').innerHTML = html;
      callback();
    })
    .catch((err) => {
      console.error(err);
    });
}