// https://api.github.com/users/PatrickTDewey
let inputVal = document.querySelector('.get-pokemon');
let getButton = document.querySelector('.get-poke-button');

// getButton.addEventListener('click', async () => {
//     console.log(inputVal.value);
//     let myPokemon = []
//     for(let i = 1; i < 50; i++){
//         let request = await fetch('https://pokeapi.co/api/v2/pokemon/' + i)
//         let pokemonData = request.json();
//         myPokemon.push(pokemonData);
//     }

    
//     console.log(myPokemon[0]);
    
// });
getButton.addEventListener('click', async () => {
    let request = await fetch('https://pokeapi.co/api/v2/pokemon/' + inputVal.value);
    console.log(request);
    let pokemonResponse = await request.json();
    console.log(pokemonResponse);
    // document.getElementById('pokemon-name').innerHTML = pokemonResponse.name;
    let sprite = pokemonResponse.sprites.front_shiny;
    let pokeImg = document.createElement('img');
    pokeImg.className = 'pokemon';
    pokeImg.src = sprite;
    document.querySelector('.gallery-grid').appendChild(pokeImg);
});

window.addEventListener('load', async (event) => {
    for (let i = 1; i <= 50; i++) {
        let galleryRequest = await fetch('https://pokeapi.co/api/v2/pokemon/' + i);
        let galleryResponse = await galleryRequest.json();
        let pokeImg = document.createElement('img');
        pokeImg.className = 'pokemon';
        pokeImg.src = galleryResponse.sprites.front_shiny
        document.querySelector('.gallery-grid').appendChild(pokeImg);        
    }
    
})