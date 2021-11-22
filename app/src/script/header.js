const headerImg = document.querySelector('.header__info-img'),
headerInfo = document.querySelector('.header__info'),
headerText = document.querySelector('.header__info-text'),
headerAbout = document.querySelector('.header__content-about'),
headerContentImg = document.querySelector('.header__content-img')

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
      headerText.style.cssText = `
      display:none;
      `
      headerAbout.style.cssText = `
      margin: 0px 0px;
      `
  }
})


headerContentImg.addEventListener('click', (e) => {
  // console.log('asd');
  console.log(e.target);
  if(e.target.classList.contains('header__content-img')){
    console.log('asd');
    headerInfo.classList.remove('active')
  }
})



