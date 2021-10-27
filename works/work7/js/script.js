let btn1 = document.querySelector('#catalogbtn1')
let btn2 = document.querySelector('#catalogbtn2')
let topbtn1 = document.querySelector('#topbtn1')
let topbtn2 = document.querySelector('#topbtn2')
let catalog1 = document.querySelector('#catalog1')
let catalog2 = document.querySelector('#catalog2')

btn1.classList.add('catalog__btns-btn-active')
catalog2.classList.add('catalog__list-noactive')

btn1.addEventListener('click', () => {
  if (btn1.classList.contains('catalog__btns-btn-active')) {
    return
  } else {
    catalog1.classList.remove('catalog__list-noactive')
    btn2.classList.remove('catalog__btns-btn-active')
    btn1.classList.add('catalog__btns-btn-active')
    catalog2.classList.add('catalog__list-noactive')
  }
})

btn2.addEventListener('click', () => {
  if (btn2.classList.contains('catalog__btns-btn-active')) {
    return
  } else {
    catalog2.classList.remove('catalog__list-noactive')
    btn1.classList.remove('catalog__btns-btn-active')
    btn2.classList.add('catalog__btns-btn-active')
    catalog1.classList.add('catalog__list-noactive')
  }
})

topbtn1.addEventListener('click', () => {
  if (btn1.classList.contains('catalog__btns-btn-active')) {
    return
  } else {
    catalog1.classList.remove('catalog__list-noactive')
    btn2.classList.remove('catalog__btns-btn-active')
    btn1.classList.add('catalog__btns-btn-active')
    catalog2.classList.add('catalog__list-noactive')
  }
})

topbtn2.addEventListener('click', () => {
  if (btn2.classList.contains('catalog__btns-btn-active')) {
    return
  } else {
    catalog2.classList.remove('catalog__list-noactive')
    btn1.classList.remove('catalog__btns-btn-active')
    btn2.classList.add('catalog__btns-btn-active')
    catalog1.classList.add('catalog__list-noactive')
  }
})
