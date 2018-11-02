/* exported checkAboutMe, resetAboutMe */

// Good place to "initialize things" - meaning run
// once when the script is loaded
var aboutMeForm = document.getElementById('about-me-form');
var aboutMeResponse = document.getElementById('about-me-response');

// eslint-disable-next-line no-unused-vars
function checkAboutMe() {
    // this code is specific to when checkAnswers is called

    var elements = aboutMeForm.elements;

    var catsInput = elements.cats;
    var likeCats = catsInput.value;

    var foodInput = elements.food;
    var favoriteFood = foodInput.value.toLowerCase();

    var correct = 0;

    if(likeCats.toLowerCase() === 'yes') {
        // let's run this code if they like cats
        correct = correct + 1;
        catsInput.classList.add('correct');
        catsInput.classList.remove('incorrect');
    }
    else if(likeCats !== '') {
        catsInput.classList.add('incorrect');
        catsInput.classList.remove('correct');
    }
    
    if(favoriteFood === 'ice cream' || favoriteFood === 'pie') {
        // this only runs if true
        correct = correct + 1;
        foodInput.classList.add('correct');
        foodInput.classList.remove('incorrect');
    } 
    else if(favoriteFood !== '') {
        foodInput.classList.add('incorrect');
        foodInput.classList.remove('correct');
    }

    aboutMeResponse.textContent = 'You got ' + correct + ' out of 2';

    // lots of chaining
    // document.getElementById('question-two').classList.remove('hidden');
}

// eslint-disable-next-line no-unused-vars
function resetAboutMe() {
    var elements = aboutMeForm.elements;
    var catsInput = elements.cats;
    var foodInput = elements.food;

    catsInput.classList.remove('correct');
    catsInput.classList.remove('incorrect');
    foodInput.classList.remove('correct');
    foodInput.classList.remove('incorrect');

    aboutMeResponse.textContent = 'you must be psychic!!';

}
