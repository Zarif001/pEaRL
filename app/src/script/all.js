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

const slide = document.querySelector('.main__menu-picture'),
 slideParent = document.querySelectorAll('.main__menu-aboutPicture '),
 slideHeight = slide.clientHeight,
 slideWidth = slide.clientWidth,
 activeSlide = 0

slide.style = `
position:relative;
height:${slideHeight}px;
overflow:hidden;
`
slideParent.forEach(item => {
  for(let i = 0; i<item.length; i++){
    item.style = `
    position:absolute;
    width: ${slideWidth}px;
    height: ${slideHeight}px;
    `
    if(i != activeSlide){
      item.style.transform = `translateX(${slideWidth}px)`
    }
    
  } 

})








