const jokEEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click',generateJoke)

generateJoke()

async function generateJoke(){
    const config = {headers:{
        'Accept':'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com',config)
        
    const data = await res.json()

    jokEEl.innerHTML = data.joke
}

// function generateJoke(){
//     const config = {headers:{
//         'Accept':'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com',config)
//         .then(res => res.json())
//         .then((data) => {
//             jokEEl.innerHTML = data.joke
//     })
// }