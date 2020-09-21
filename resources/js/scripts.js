const itemsContainer = document.getElementById('items')
import data from './data.js'
// the length of our data determines how many times this loop goes around
for (let i=0; i<data.length; ++i) {
    let newDiv = document.createElement('div');
      newDiv.className = 'item'
    // display the image
    let img = document.createElement('img');
    img.src = data[i].image
    img.width = 300
    img.height = 300
    newDiv.appendChild(img)
  
    let desc = document.createElement('P')
    desc.innerText =data[i].desc
    newDiv.appendChild(desc)
    let price = document.createElement('P')
    price.innerText = data[i].price
    newDiv.appendChild(price)
  
    let button = document.createElement('button')
    button.id = data[i].name
  

    button.dataset.price = data[i].price
    button.innerHTML = "Add to Cart"
    newDiv.appendChild(button)

    itemsContainer.appendChild(newDiv)
  }
//shopping cart
const cart=[]
function addItem(name, price){
  for(leti=0;i<cart.length;i++){
    if(cart[i].name===name){
      cart[i].qty++
      return
    }
  }
  const item={name,price,qty:1}
  cart.push(item)
}
function showItems(){
  console.log(`You have ${getQuantity()} items in your cart`)
  for(leti=0;i<cart.length;i++){
    console.log(`- ${cart[i].name} $${cart[i].price} x ${cart[i].qty}`)
  }
  console.log(`Total in cart: $${getTotal()}`)
}
function getQuantity(){
  let qty=0
  for(leti=0;i<cart.length;i++){
    qty+=cart[i].qty
  }
  return qty
}
function getTotal(){
  let total=0
  for(leti=0;i<cart.length;i++){
    total+=cart[i].price*cart[i].qty
  }
  return total.toFixed(2)
}