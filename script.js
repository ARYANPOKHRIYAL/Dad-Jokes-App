const jokeElement= document.getElementById('joke');
const jokeBtn= document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);
generateJoke();

async function generateJoke(){
    const config= {
        headers: {
            'Accept': 'Application/json'
        }
    }
    const res= await fetch('https://icanhazdadjoke.com', config)
    const data= await res.json();
    jokeElement.innerHTML= data.joke;
}

// function generateJoke(){
//     const config= {
//         headers: {
//             'Accept': 'Application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com', config)
//     .then(res => res.json()
//     .then(data => {
//         jokeElement.innerHTML= data.joke;
//     }));
// }