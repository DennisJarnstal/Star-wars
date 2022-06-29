const search = document.querySelector('#search');
search.addEventListener('click', displayResult);
let result = document.querySelector('#result');
let charNameHeader = document.querySelector('#charNameHeader');

function displayResult() {    
    let inputName = document.querySelector('#nameSearch').value;

    if(inputName.length <= 0){
        alert('Write a name you must');
    }

    else{
    let fullUrl = `https://www.swapi.tech/api/people/?name=${inputName}`;
    fetch(fullUrl)
     .then(res => res.json())
     .then(data => {

        if(data.result.length <= 0){
            alert('Find one with that name we did not');
        }
        else{
        result.innerHTML = '';
        charNameHeader.innerHTML = '';

            for(let i=0;i<data.result.length;i++)
            { 
                charNameHeader.innerHTML += `${data.result[i].properties.name}`
                result.innerHTML += `Tall this one is:\n${data.result[i].properties.height} cm\n\n`
                result.innerHTML += `Much weight this one has:\n${data.result[i].properties.mass} kg\n\n`
                result.innerHTML += `Giver of birth or not may this one be:\n${data.result[i].properties.gender}\n\n`
                result.innerHTML += `Such hair that one has:\n${data.result[i].properties.hair_color}`
            }
        }
        })
    }   
}
