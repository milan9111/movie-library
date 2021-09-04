function testWebP(callback) {
    var webP = new Image();
        webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
        };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
    
testWebP(function(support){
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

//===================================================================

const nameUser = document.querySelector('.name-user'); 
const greetings = document.querySelector('.greetings'); 
const filmGenre = document.querySelector('.film-genre'); 
const releaseYear = document.querySelector('.release-year'); 
const selectedFilms = document.querySelector('.selected-films'); 
const information = document.querySelector('.information'); 

const nameUserSubmit = document.querySelector('.name-user__submit');
const greetingsBtn = document.querySelector('.greetings__btn');
const filmGenreBtn = document.querySelector('.film-genre__btn');
const realeseYearSubmit = document.querySelector('.realese-year__submit');
const realeseYearBtn = document.querySelector('.realese-year__btn');
const selectedFilmsBtn = document.querySelector('.selected-films__btn');
const informationBtn = document.querySelector('.information__btn');

const nameUserInput = document.querySelector('.name-user__input');

let greetingsTitle = document.querySelector('.greetings__title');
let greetingsTitleUser = '';

const filmGenreItem = document.querySelectorAll('.film-genre__item');
let arrFilmGenre = [];

const realeseYearOption = document.querySelector('.realese-year__option');
let arrRealeseYear = [];


nameUserInput.addEventListener('change', (event) => {
    greetingsTitleUser = event.target.value;
})

nameUserSubmit.addEventListener('click', () => {
    if(greetingsTitleUser.trim() !== '') {
        greetingsTitle.innerText = `Добро пожаловать, ${greetingsTitleUser}!`;
        localStorage.setItem('user', greetingsTitleUser);
        nameUser.classList.remove('active-block');
        greetings.classList.add('active-block');
    }
   
})

greetingsBtn.addEventListener('click', () => {
    greetings.classList.remove('active-block');
    filmGenre.classList.add('active-block');
})

filmGenreBtn.addEventListener('click', () => {
   if(arrFilmGenre.length > 0) {
    filmGenre.classList.remove('active-block');
    releaseYear.classList.add('active-block');
   }
})

realeseYearSubmit.addEventListener('click', () => {
    if(arrRealeseYear.length > 0) {
     releaseYear.classList.remove('active-block');
     selectedFilms.classList.add('active-block');
    }
})

realeseYearBtn.addEventListener('click', () => {
    arrRealeseYear.length = 0;
    releaseYear.classList.remove('active-block');
    selectedFilms.classList.add('active-block');
    console.log(arrRealeseYear);
})

selectedFilmsBtn.addEventListener('click', () => {
    selectedFilms.classList.remove('active-block');
    information.classList.add('active-block');
})

informationBtn.addEventListener('click', () => {
    information.classList.remove('active-block');
    selectedFilms.classList.add('active-block');
})


filmGenreItem.forEach((item) => {
    item.addEventListener('click', setArrFilmGenre);
    function setArrFilmGenre(event) {
      if(item.checked) {
        arrFilmGenre.push(event.target.id);
      } else {
        arrFilmGenre.splice(arrFilmGenre.indexOf(event.target.id), 1); 
      }
      console.log(arrFilmGenre);  
    }
});

 
realeseYearOption.addEventListener('click', setArrRealeseYear);
function setArrRealeseYear(event) {
     if(event.target.value === '80-90') {
        arrRealeseYear.length = 0;
        arrRealeseYear.push('80-90');
    } else if (event.target.value === '90-00') {
        arrRealeseYear.length = 0;
        arrRealeseYear.push('90-00');
    } else if (event.target.value === '00-10') {
        arrRealeseYear.length = 0;
        arrRealeseYear.push('00-10');
    } else if (event.target.value === '10-21') {
        arrRealeseYear.length = 0;
        arrRealeseYear.push('10-21');
    }
    console.log(arrRealeseYear);
}














 