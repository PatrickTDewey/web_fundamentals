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

// function asyncFunc(){
//     for (let index = 0; index < 1000; index++) {
//         console.log(`running ${index}`);
        
//     }
// }

// setTimeout(asyncFunc, 10000);
function setName(e) {
    console.log(e.value);
    document.getElementById('name').innerHTML = e.value
}

function pickFood(e) {
    console.log(`The food is ${e.value}`);
}

function orderFood() {
    alert('Ordering a ' + document.querySelector('#food-select').value);
}