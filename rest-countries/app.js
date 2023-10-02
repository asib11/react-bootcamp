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

// const getCountryInfo = country =>{
//     return `
//         <div class="country">
//             <h2>${country.name.common}</h2>
//             <img src="${country.flags.png}">
//         </div>
//     `;
// }


// const getCountryInfo = country =>{
//     //option 1 destructuring
//     const {name, flags} = country; // destructuring
//     return `
//         <div class="country">
//             <h2>${name.common}</h2>
//             <img src="${flags.png}">
//         </div>
//     `;
// }


const getCountryInfo = ({name, flags}) =>{ //option 2 destructuring
    return `
        <div class="country">
            <h2>${name.common}</h2>
            <img src="${flags.png}">
        </div>
    `;
}

loadData();