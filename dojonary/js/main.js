function logout(e) {
    if (e.innerText === `Login`) {
        e.innerText = 'Logout';
    } else {
        e.innerText = `Login`;
    }
}

function removeElement(e) {
    e.remove();
}