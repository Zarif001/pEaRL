const headerImg = document.querySelector('.header__info-img'),
headerInfo = document.querySelector('.header__info'),
headerText = document.querySelector('.header__info-text'),
headerAbout = document.querySelector('.header__content-about'),
headerContentImg = document.querySelector('.header__content-img')

headerImg.addEventListener('click', (e) =>{
  e.preventDefault()
  if(headerInfo.classList.contains('active')){
      headerInfo.classList.remove('active')
  } 
   else {
      headerInfo.classList.add('active')
  }
})


headerContentImg.addEventListener('click', (e) => {
  if(e.target.classList.contains('header__content-img')){
    headerInfo.classList.remove('active')
  }
})



