var x = 4;

var tags = document.querySelectorAll('input.code:checked');//input.name

function query() {
    var codeInputs = document.querySelectorAll('input[name="code"]');
    // array of elements loopdy loop
    for(var i = 0; i < codeInputs.length; i++) {//i index begin at0 ++?
        var input = codeInputs[i];
        console.log(input.value, input.id, input.checked);//input.code or input[name="code"]
    }
    var selectedcodeInput = document.querySelector('input[name="code"]:checked');//input.code or input[name="code"]
    if(selectedcodeInput) {
        console.log(selectedcodeInput.value);
    }
    else {
        console.log('noTHING selected');
    }
    console.log(x);}