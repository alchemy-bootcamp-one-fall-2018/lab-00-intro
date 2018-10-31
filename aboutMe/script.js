/* eslint no-console: "off" */
/* exported tryQuerySelector */
'use strict';
 // eslint-disable-next-line
var xIsTheNumber = 4;

var tags = document.querySelectorAll('input[name="tags"]:checked');

function tryQuerySelector() {
    var CODEInputs = document.querySelectorAll('input[name="code"]');
    for(var i = 0; i < CODEInputs.length; i++) {
        var input = CODEInputs[i];
        console.log(input.value, input.id, input.checked);
    }
    var selectedCODEInput = document.querySelector('input[name="code"]:checked');
    if(selectedCODEInput) {
        console.log(selectedCODEInput.value);
    }
    else {
        console.log('no CODE selected');
    }
    console.log(xIsTheNumber);
}
var pets = ['felix', 'cub', 'tweety'];
for(var i = 0; i < pets.length; i++) {
    //console.log(pets[i]);
}
var phrase = 'howdy hoe';
for(var j = 0; j < phrase.length; j++) {
   // console.log(phrase[j]);
}