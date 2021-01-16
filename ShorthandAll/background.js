var box = document.querySelector('.box');
var radioSelection = document.querySelector('.radio-selection');
var oldClass = '';

function switchFaces() {
    var selectedRadio = radioSelection.querySelector(':checked');
    var newClass = 'show-' + selectedRadio.value;
    if (oldClass) {
        box.classList.remove(oldClass);
    }
    box.classList.add(newClass);
    oldClass = newClass;
}

switchFaces();

radioSelection.addEventListener('change', switchFaces);