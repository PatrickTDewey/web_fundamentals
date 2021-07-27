function loadingReport() {
    alert('Loading weather report...');
}

let cookie = document.querySelector('.cookie-policy');
function hide() {
    cookie.remove();
}

let degreeArr = document.getElementsByClassName('degree');

function convertTemp(e) {
    switch (e.value) {
        case 'celsius':
            for (let index = 0; index < degreeArr.length; index++) {
                let temp = ((Number(degreeArr[index].innerHTML) - 32) * (5 / 9)) ;
                degreeArr[index].innerHTML = Math.floor(temp);
            }
            break;
        case 'farenheit':
            for (let index = 0; index < degreeArr.length; index++) {
                let temp = (Number(degreeArr[index].innerHTML) * ( 9 / 5 )) + 32;
                degreeArr[index].innerHTML = Math.floor(temp);
            }
            break;
    }
}