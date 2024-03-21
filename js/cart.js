let cartIcon = document.querySelector(".carticon");
// console.log(cartIcon);
let cartSection = document.querySelector(".cartsection");
console.log(cartSection);
let cartbutton = document.querySelectorAll(".image__button");
let cart = document.querySelector(".countdown");
let cartitems = [];

cartIcon.addEventListener("click", function () {
  console.log(cartSection);
  cartSection.classList.toggle("show__cart");
});

function updateCartItems() {
  // cartSection.innerHTML = "";
  const cartProduct = document.createElement("div");
  cartProduct.classList.add("picked");
  cartitems.forEach((item) => {
    cartProduct.innerHTML = `
    <img src=${item.image} alt="" width=50px>
    <h4>${item.name}</h4>
    <p class="single-price">${item.price}</p>
    <div>
    <button class="increament">+</button>
    <p class="quantity">1</p>
    <button class="decreament">-</button>
    </div>
    <p class="price">${item.price}</p>
    `;

    cartSection.append(cartProduct);
  });
  updatePrices();
}

for (let i = 0; i < cartbutton.length; i++) {
  let element = cartbutton[i];
  // console.log(element);
  element.addEventListener("click", function (e) {
    const pizzaname = e.target.parentElement.children[2].textContent;
    const pizzaprice = e.target.parentElement.children[3].textContent.replace(
      "ksh.",
      ""
    );
    const pizzaimg = e.target.parentElement.children[0].src;

    console.log(e);

    if (e.target.textContent.toLowerCase() === "add to cart") {
      // updateCartItems();
      // cart.textContent = Number(cart.textContent) + 1;
      let pizzaItem = {
        name: pizzaname,
        price: pizzaprice,
        image: pizzaimg,
      };
      console.log(pizzaItem);
      cartitems.push(pizzaItem);

      e.target.textContent = "Remove from cart";
      e.target.style.background = "orange";
      cart.textContent = cartitems.length;
      updateCartItems();
    } else {
      const indexToRemove = cartitems.findIndex(
        (item) => item.name === pizzaname
      );
      console.log(indexToRemove);
      cartitems.splice(indexToRemove, 1);
      // cartSection.innerHTML = "";
      cart.textContent = cartitems.length;
      updateCartItems();

      e.target.style.background = "black";
      e.target.textContent = "Add to cart";
      // console.log(cartitems);
      // console.log(indexToRemove);
    }
  });
}
cartSection.addEventListener("click", function (e) {
  if (e.target.classList.contains("increament")) {
    const currentQuantityElement = e.target.nextElementSibling;
    currentQuantityElement.textContent++;
    // console.log("adding items");
   
  } else if (e.target.classList.contains("decreament")) {
    // console.log("removing items");
    const currentQuantityElement = e.target.previousElementSibling;
    if (currentQuantityElement.textContent > 1) {
      currentQuantityElement.textContent--;
    }
  }
  updatePrices();
});

function updatePrices() {
  let cartTotals = 0;
  let cartItemProducts = document.querySelectorAll(".picked");
  // console.log(cartItemProducts);
  for (let r = 0; r<cartItemProducts.length; r++) {
    let productItem = cartItemProducts[r];
    // console.log(productItem)
    const itemName = productItem.querySelector("h4").textContent;
    // coinputnsole.log(itemName)
    let itemFound = cartitems.find((element) => element.name === itemName);
    if (itemFound) {
      const quantity = parseInt(
        productItem.querySelector(".quantity").textContent
      );
      console.log(quantity);
      const price = parseInt(
        productItem.querySelector(".single-price").textContent
      );
      console.log( price);
      let total = price * quantity;
      console.log(total)
      productItem.querySelector(".price").textContent = total;
      cartTotals+= total;
      console.log(cartTotals);
    }
    document.querySelector(
      ".cart-total"
    ).textContent =`Total Price:ksh.${cartTotals}`;
  }
}
