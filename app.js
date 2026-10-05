let inc = document.querySelector('.increase')
let dec = document.querySelector('.decrease')
let counter = document.querySelector('.count')

let section1 = document.querySelector('.section1')
let thumbnail = document.querySelectorAll('.thumbBtn')
let body = document.querySelector('body')


let count = 0
inc.addEventListener('click',()=>{
  
  count++
  counter.textContent = count
})

dec.addEventListener('click',()=>{
  
  if(count<=0) return
  count--
  counter.textContent = count
})


// for menu

const menu = document.querySelector('.menu')
const closeMenu = document.querySelector('.closeMenu')
const menuLogo = document.querySelector('.menuLogo')
const overlay = document.querySelector('.overlay')

let moved = false
menu.style.transition = "left 0.5s ease" 
function onClickMenu(){
  if(moved == false){ 
    
    menu.style.position = 'fixed'
    menu.style.transition = "left 0.5s ease" 
    menu.style.left ='0%' 
         
    moved = true
    overlay.classList.add('active')
    console.log(moved);
  }
}

function onCloseMenu(){
  if(moved == true){
    menu.style.transition = "left 0.5s ease"
    menu.style.left = '-100%'
    overlay.classList.remove('active')
    moved = false
    console.log(moved);
  }
  
}

menuLogo.addEventListener('click',onClickMenu)
closeMenu.addEventListener('click',onCloseMenu)
overlay.addEventListener('click',onCloseMenu)

// for cart

const cart = document.querySelector('.sideCart')
const cartElements = document.querySelector('.cartElements')
const cart2 = document.querySelector(".CART2")

let cartClick = false

function onSideCart(){
  
  if(cartClick){
    cartElements.style.display = 'block'   
  }else{
    
  }
  
}


cart.addEventListener('click',onSideCart)