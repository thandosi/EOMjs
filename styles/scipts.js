let products = [];
let cart = [];
console.log(cart);

fetch("https://ancient-dawn-92955.herokuapp.com/get_products/")
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

//* Search Button *//

function searchItems() {
  let searchTerm = document.querySelector(".searchIterms").value;
  console.log(searchTerm);
}

//* Add to cart functions*//
function addToCart(id) {
  let product = products.data.find((item) => {
    return (item.id = id);
  });
  console.log(product);
  cart.push(product);
  console.log("See Cart Items Here: ", cart);
}

function addToCheckout(product_name, price) {
  for (let i = 0; i < cart.length; i += 1){
    if (cart[i].product_name == product_name){
      cart[i].quantity += 1
      return
    }
  }
  const prod = {product_name, price,quantity:1}
  cart.push(item)
}


