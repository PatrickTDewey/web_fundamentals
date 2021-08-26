let selectedMeat = document.querySelector('.order-button');
let cheese = document.getElementById('cheese');
let meat = document.getElementById('meat');

selectedMeat.addEventListener('click', () => {
    document.getElementById('meat-header').innerHTML = meat.value;
    document.getElementById('cheese-header').innerHTML = cheese.value;
    console.log('You clicked a button');
})

