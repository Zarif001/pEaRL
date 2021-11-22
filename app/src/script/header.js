const headerImg = document.querySelector('.header__info-img'),
headerInfo = document.querySelector('.header__info'),
headerText = document.querySelector('.header__info-text'),
headerAbout = document.querySelector('.header__content-about')

headerImg.addEventListener('click', (e) =>{
  e.preventDefault()
  if(headerInfo.classList.contains('active')){
      headerInfo.classList.remove('active')
      headerImg.style.cssText = `
      display:block;
      `
  } 
   else {
      headerInfo.classList.add('active')
      headerImg.style.cssText = `
      display:none;
      `
      headerText.style.cssText = `
      display:none;
      `
      headerAbout.style.cssText = `
      margin: 0px 0px;
      `
  }
})

