let button = document.getElementById('button-search');
button.addEventListener('click', async (event) => {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await response.json();
    console.log(data[0]);
    for (let i = 0; i < data.length; i++) {
        let resultBox = document.createElement('h2');
        resultBox.className = 'result-h2';
        resultBox.innerHTML = data[i].name;
        document.getElementById('results').appendChild(resultBox);
        
        
    }
})