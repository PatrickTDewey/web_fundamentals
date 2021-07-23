function myCustomFunc(e) {
    console.log('element clicked', e);;
}

function turnOff(e){
    if (e.innerText == 'On') {
        e.innerText = 'Off';
    }
    else{
        e.innerText = 'On';
    }
}

function removedElement(e) {
    e.remove();
}

function over(e) {
    alert('mouseover');
}

function out(e) {
    alert('mouseout')
}
