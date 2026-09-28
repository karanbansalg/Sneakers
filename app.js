let inc = document.querySelector('.increase')
let dec = document.querySelector('.decrease')
let counter = document.querySelector('.count')
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