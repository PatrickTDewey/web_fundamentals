let getArt = document.querySelector('.art-button');

getArt.addEventListener('click', async (event) => {
    // let newElement = document.createElement('img');
    // newElement.className = 'harvard image';
    let req = await fetch('https://api.harvardartmuseums.org/image?apikey=cbff98ca-5970-433a-9f79-59bf92651c9a');
    let response = await req.json();
    console.log(response);
})