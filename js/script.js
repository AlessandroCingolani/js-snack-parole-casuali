const output = document.getElementById('random-words');

// N random words
const repeatWord = 8;
let arrayWords = [];
let generatedPhrase;
let loading = true;

// Async function wait all data 
async function waitData() {
  try {
    for (let i = 0; i < repeatWord; i++) {
      const response = await axios.get('https://flynn.boolean.careers/exercises/api/random/word');
      arrayWords.push(response.data.response);
    }
    generatedPhrase = arrayWords.join(" "); 
    output.innerHTML = `<div><p>${generatedPhrase}</p></div>`;
    loading = false;
  } catch (error) {
    console.log(error);
  }
}

if(loading){
  output.innerHTML = `<div><p>Caricamento...</p></div>`;
}

waitData();
