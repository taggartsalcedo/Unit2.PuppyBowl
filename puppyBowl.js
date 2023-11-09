//connect html
//connect to store API
const apiBaseURL =(`fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-sf/players`);

//references
const body= document.querySelector(`body`);
const form= document.querySelector(`form`);
const input= document.querySelector(`input`);



//store api call data
const state= {
    pups: []
}

const getAllBreeds = async () => {
    const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players`);
    const breedInfo = await response.json();
    const breedlist = breedInfo.results;
    renderAllBreeds(breedlist);
};
const renderAllBreeds = (listOfBreeds) =>{
}

//create event listen to track user input
form.addEventListener(`submit`, async (event) => {
    event.preventDefeault();
    const input = document.querySelector('input');
    const inputNumber = input.value;
    const breed= await fetch(`fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-sf/players`)
    }); 