const loadData = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => displayData(data));
}

const displayData = countries =>{
    console.log(countries);
    const countriesHTML = countries.map(country => getCountryInfo(country));
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');


}

const getCountryInfo = country =>{
    return `
        <div class="country">
            <h2>${country.name.common}</h2>
            <img src="${country.flags.png}">
        </div>
    `;
}

loadData();