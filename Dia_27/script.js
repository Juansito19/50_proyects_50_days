const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
  'Mensaje 1',
  'Mensaje 2',
  'Mensaje 3',
  'Mensaje 4'
]

const types = ['info', 'succes', 'error']

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
 const notif = document.createElement('div')
 notif.classList.add('toast')
 notif.classList.add(type ? type : getRandomTypes())

 notif.innerText = message ? message : getRandomMessage()

 toasts.appendChild(notif)

 setTimeout(() => {
  notif.remove()
 }, 3000)
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}
function getRandomTypes() {
  return types[Math.floor(Math.random() * types.length)]
}