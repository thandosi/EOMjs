 const cart = []
 const obj = {}

 fetch("https://guarded-lowlands-69569.herokuapp.com/get-Point_of_Sales/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    products = data;
    showproducts(products);
  });

//* Show-Profucts Button*//
function showproducts(products) {
  let product_container = document.querySelector(".content2");
  product_container.innerHTML = "";
  products.data.forEach((product) => {
    product_container.innerHTML += `
    <div class = "products" ">
        <img src="${product.images}" class = "product-images">
        <div class= "product-content">
        <h4 class = "product-title"> ${product.product_name}</h4>
        <p class = "product-price">R${product.price} </p>
        <button onclick="addToCart(${product.id})"> Add to cart</button>
        </div>
    </div>
    `;

    //document.querySelector(".name").innerHTML += `<br><span > ${ product.product_name + ""} </span>`; 
    //document.querySelector(".price").innerHTML += `<br><span > ${product.price + ""} </span>`;
    
  });
}

 //adding items -------------------------------------------

 function addItem( product_name, price){
    for( let i = 0; i < cart.length; i += 1){
        if (cart[i].product_name === product_name){
            cart[i].quantity +=1
            return
        }

    }
     const item = { product_name:product_name, price:price, quantity:1}
     cart.push(item)

 }

 // show items---------------------------------------------
 function showItem(){
 
     console.log(`You have ${getQuantity()} items in your cart`)

     let itemStr = ''

     for( let i = 0; i < cart.length; i += 1) {
         console.log(`${cart[i].product_name} R${cart[i].price} x ${cart[1].quantity}`)
         itemStr += `<li> ${cart[i].product_name} R${cart[i].price} x ${cart[1].quantity} </li>`
     }

     products.innerHTML = itemStr

     console.log (`total in cart R${getTotal()}`)

 }

 //quantity----------------------------------------------
 function getQuantity(){
    let quantity = 0
    for (let i = 0; i < cart.length; i += 1){
        quantity += cart[i].quantity 
    }
    return quantity
 }

 //total----------------------------------------------------
 function getTotal(){
    let total = 0
    for (let i =0; i < cart.length; i +=1){
        total += cart[i].price * cart[i].quantity
    }
    return total.toFixed(2)
 }

 //removing -------------------------------------------

 function removeItems(name, quantity = 0){
    for (let i = 0; i < cart.length; i +=1){
        if (cart[i].product_name === name){
            if (quantity > 0){
              cart[i].quantity -= quantity
             }
            if (cart[i].quantity < 1 === 0){
              cart.splice(i, 1)
             }
             return
         }
     }

 }

 //testing items ---------------------------------------
 addItem('apple', 20)
 addItem('grapes', 30)
 addItem('grapes', 30)
 addItem('grapes', 30)
 addItem('mango', 20)
 addItem('banan', 10)
 addItem('oil', 25)
 addItem('red', 10.34567)
 addItem('blue', 5)

 removeItems('grapes',3)

 const products = document.getElementById('#products')
 

 console.log(products)
 
 

 

 showItem()