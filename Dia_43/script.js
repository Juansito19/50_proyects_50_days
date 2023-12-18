const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', (e) => {
  if(e.target.parentNode.classList.contains('rating')) {
    removeActive()
    e.target.parentNode.classList.add('active')
    selectedRating = e.target.nextElementSibling.innerHTML
  }
})

sendBtn.addEventListener('click', (e) => {
  if(selectedRating === 'Satisfied') {
    panel.innerHTML = `
    <strong>No ha dado ninguna respuesta... <br>
    Por favor, vuelva a intentarlo</strong>
    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMzYgMzYiPjxjaXJjbGUgY3g9IjE4IiBjeT0iMTgiIHI9IjE4IiBmaWxsPSIjRkZDQzREIi8+PHBhdGggZmlsbD0iIzY2NDUwMCIgZD0iTTIyLjg4NiAyNy40ODVjLTEuNTc1IDAtMi4zOTMtLjc5Ny0zLjA0OS0xLjQzN2MtLjU2LS41NDUtLjk2NS0uOTM5LTEuODI3LS45MzljLS44NjMgMC0xLjI2OC4zOTUtMS44MjcuOTM5Yy0uNjU2LjY0LTEuNDc0IDEuNDM3LTMuMDQ4IDEuNDM3cy0yLjM5LS43OTctMy4wNDYtMS40MzdjLS41NTctLjU0NC0uOTYtLjkzNy0xLjgxNS0uOTM5Yy0uNjExLjAwMi0uOTcuMTkzLTEuMzIuNDhhLjg3NS44NzUgMCAwIDEtMS4xMDktMS4zNTNhMy42NjQgMy42NjQgMCAwIDEgMi40MDUtLjg3N2guMDQ5YzEuNTUyLjAxMiAyLjM2MS44MDEgMy4wMTIgMS40MzdjLjU1OS41NDYuOTYzLjkzOSAxLjgyNC45MzljLjg2MyAwIDEuMjY4LS4zOTUgMS44MjgtLjkzOWMuNjU2LS42NCAxLjQ3NC0xLjQzNyAzLjA0OC0xLjQzN3MyLjM5Mi43OTYgMy4wNDggMS40MzdjLjU2MS41NDUuOTY1LjkzOSAxLjgyOC45MzlzMS4yNjgtLjM5NSAxLjgyOC0uOTM5Yy42NTYtLjY0MSAxLjQ3NC0xLjQzNyAzLjA0OS0xLjQzN2MuOTEzIDAgMS42Ny4yNjMgMi4zODMuODI4YS44NzUuODc1IDAgMSAxLTEuMDg3IDEuMzcxYy0uMjk0LS4yMzMtLjY1NC0uNDQ5LTEuMjk1LS40NDljLS44NjMgMC0xLjI2OC4zOTUtMS44MjguOTM5Yy0uNjU5LjY0MS0xLjQ3NiAxLjQzNy0zLjA1MSAxLjQzN20tMTEuNDkxLTguNjFhMy43NjYgMy43NjYgMCAwIDEtMy43NjItMy43NjJhMy43NjcgMy43NjcgMCAwIDEgMy43NjItMy43NjNjMS4yNzkgMCAyLjMxOSAxLjA0IDIuMzE5IDIuMzE5cy0xLjA0IDIuMzE5LTIuMzE5IDIuMzE5YS44NzUuODc1IDAgMCAxIDAtMS43NWEuNTcuNTcgMCAwIDAgMC0xLjEzOGEyLjAxNSAyLjAxNSAwIDAgMC0yLjAxMiAyLjAxM2MwIDEuMTA5LjkwMyAyLjAxMiAyLjAxMiAyLjAxMmMxLjkwNiAwIDMuNDU2LTEuNTUgMy40NTYtMy40NTZzLTEuNTUtMy40NTYtMy40NTYtMy40NTZhNC45MDUgNC45MDUgMCAwIDAtNC44OTkgNC45YS44NzUuODc1IDAgMCAxLTEuNzUgMGE2LjY1NyA2LjY1NyAwIDAgMSA2LjY0OS02LjY1YzIuODcxIDAgNS4yMDYgMi4zMzUgNS4yMDYgNS4yMDZzLTIuMzM0IDUuMjA2LTUuMjA2IDUuMjA2bTEzLjIwOSAwYy0yLjg3MSAwLTUuMjA2LTIuMzM1LTUuMjA2LTUuMjA2czIuMzM1LTUuMjA2IDUuMjA2LTUuMjA2YzIuMDc1IDAgMy43NjMgMS42ODggMy43NjMgMy43NjJzLTEuNjg4IDMuNzYzLTMuNzYzIDMuNzYzYy0xLjI3OCAwLTIuMzE4LTEuMDQtMi4zMTgtMi4zMTlzMS4wNC0yLjMxOSAyLjMxOC0yLjMxOWEuODc1Ljg3NSAwIDAgMSAwIDEuNzVhLjU3LjU3IDAgMCAwIDAgMS4xMzhhMi4wMTYgMi4wMTYgMCAwIDAgMi4wMTMtMi4wMTNhMi4wMTUgMi4wMTUgMCAwIDAtMi4wMTMtMi4wMTJhMy40NiAzLjQ2IDAgMCAwLTMuNDU2IDMuNDU2YTMuNDYgMy40NiAwIDAgMCAzLjQ1NiAzLjQ1NmE0LjkwNSA0LjkwNSAwIDAgMCA0Ljg5OS00Ljg5OWEuODc1Ljg3NSAwIDAgMSAxLjc1IDBjLjAwMSAzLjY2Ni0yLjk4MyA2LjY0OS02LjY0OSA2LjY0OSIvPjwvc3ZnPg==" alt="">
    `
  } else {
    panel.innerHTML = `
  <i class="fas fa-heart"></i>
  <strong>Muchas Gracias!</strong>
  <br>
  <strong>Devolucion: ${selectedRating}</strong>
  <p>Vamos a usar su respuesta para mejorar nuestro soporte.</p>
  `
  }
})

function removeActive() {
  for(let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active')
  }
}