// Header
const headerImg = document.querySelector('.header__info-img'),
  headerInfo = document.querySelector('.header__info'),
  headerContent = document.querySelector('.header__content')

headerImg.addEventListener('click', (e) => {
  e.preventDefault()
  headerInfo.classList.add('active')
})
headerInfo.addEventListener('click', () => {
  headerInfo.classList.remove('active')
})
// Main 
const mainImg = document.querySelectorAll('.main__kitchen-picture')
mainImg.forEach(list => {
  list.addEventListener('click', () => {
    if (list.classList.contains('active')) {
      list.classList.remove('active')
    } else {
      list.classList.add('active')
    }
  })
})











