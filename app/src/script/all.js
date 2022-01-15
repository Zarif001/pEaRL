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

const slideParent = document.querySelector('.main__menu-aboutPicture'),
img = [...slideParent.children],
dots = document.querySelectorAll('.main__menu-dot')
let index = 0
let dotIndex = 0

function sliderNext() {
  if(index < (img.length - 1) * slideParent.clientWidth) {
    index += slideParent.clientWidth
    dotIndex++
  } else {
    index = 0
    dotIndex = 0
  }
  img.forEach(i =>{
    i.style.transform = ` translateX(-${index}px)`
    i.style.transition = '1s'
  })
  
  setTimeout(() => sliderNext(), 2000);
  remove(dotIndex)
}
sliderNext()

dots.forEach((dot, i) =>{
  dot.addEventListener('click', () =>{
    index = slideParent.clientWidth * i
    img.forEach(i =>{
      i.style.transform = ` translateX(-${index}px)`
      i.style.transition = '1s'
    })
    dotIndex = i
    remove(dotIndex)
  })
})
function remove(index) { 
  dots.forEach(dot => {
      dot.classList.remove('active')
  })
  dots[index].classList.add('active')
}









