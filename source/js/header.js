let button = document.querySelector('.main-nav__toggle')
let nav = document.querySelector('.main-nav')
button.addEventListener('click', function () {
  if (nav.classList.contains('main-nav--closed')) {
    nav.classList.remove('main-nav--closed')
    button.classList.remove('main-nav__toggle')
    button.classList.add('main-nav__untoggle')
  } else {
    nav.classList.add('main-nav--closed')
    button.classList.remove('main-nav__untoggle')
    button.classList.add('main-nav__toggle')
  }
})
