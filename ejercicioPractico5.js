const $hamburger = document.getElementById('hamburger')
const $nav = document.getElementById('nav')

$hamburger.addEventListener('click', e=>{
  e.stopPropagation()
  $hamburger.firstElementChild.classList.toggle('is-active')
  $nav.classList.toggle('nav--hide')
})

$nav.addEventListener('click', e=>{
  e.stopPropagation()
  if((e.target).matches('.nav__link')){
    $hamburger.firstElementChild.classList.remove('is-active')
    $nav.classList.add('nav--hide')
  }
})

const $toTop = document.querySelector('.to-top')
addEventListener('scroll', e=>{
  let scrollTop = scrollY || document.documentElement.scrollTop
  if (scrollTop >= 500) {
    $toTop.classList.remove('to-top--hide')
  } else{
    $toTop.classList.add('to-top--hide')
  }
})

addEventListener('click', e=>{
  if (e.target.matches('#to-top-btn') || e.target.matches('#to-top-btn-i')) {
    scrollTo({
      // behavior: 'smooth',
      top: 0
    })
  }
})