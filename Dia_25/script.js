const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)


// CONSOLE.LOG PARA PODER VERIFICAR LA POSICION DEL SCROLL
// console.log(window.scrollY, nav.offsetHeight)
function fixNav() {
  if(window.scrollY > nav.offsetHeight + 150){
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
}