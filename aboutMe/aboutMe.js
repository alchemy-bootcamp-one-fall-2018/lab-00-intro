/* exported checkAboutMe, resetAboutMe */


var aboutMeForm = document.getElementById('about-me-form');
var aboutMeResponse = document.getElementById('about-me-response');

function checkAboutMe() {
    

    var elements = aboutMeForm.elements;

    var bugsInput = elements.bugs;
    var likeBugs = bugsInput.value;

    var filmInput = elements.film;
    var favoriteFilm = filmInput.value.toLowerCase();

    var correct = 0;

    if(likeBugs.toLowerCase() === 'yes') {
        correct = correct + 1;
        bugsInput.classList.add('correct');
        bugsInput.classList.remove('incorrect');
    }
    else if(likeBugs !== '') {
        bugsInput.classList.add('incorrect');
        bugsInput.classList.remove('correct');
    }
    
    if(favoriteFilm === 'empire strikes back' || favoriteFilm === 'return of the jedi') {
        correct = correct + 1;
        filmInput.classList.add('correct');
        filmInput.classList.remove('incorrect');
    } 
    else if(favoriteFilm !== '') {
        filmInput.classList.add('incorrect');
        filmInput.classList.remove('correct');
    }

    aboutMeResponse.textContent = 'You got ' + correct + ' out of 2';

   
}

function resetAboutMe() {
    var elements = aboutMeForm.elements;
    var bugsInput = elements.bugs;
    var filmInput = elements.film;

    bugsInput.classList.remove('correct');
    bugsInput.classList.remove('incorrect');
    filmInput.classList.remove('correct');
    filmInput.classList.remove('incorrect');

    aboutMeResponse.textContent = '';

}