const jokeEl = document.getElementById('joke') 
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// CON ASYNC | AWAIT
async function generateJoke() {

  const config = {
    headers: {
      'Accept': 'application/json'
    }
  }
  
  const res = await fetch('https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?lang=es&blacklistFlags=nsfw,religious,political,racist,sexist,explicit', config)
 
  const data = await res.json()

  jokeEl.innerHTML = data.setup + data.delivery || data.joke

}


// CON .THEN
// function generateJoke() {

//   const config = {
//     headers: {
//       'Accept': 'application/json'
//     }
//   }
  


//   fetch('https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?lang=es&blacklistFlags=nsfw,religious,political,racist,sexist,explicit', config)
//   .then(res => 
//     res.json()
//   )
//   .then(data => {
//     jokeEl.innerHTML = data.setup + data.delivery || data.joke
//   })  
// }

