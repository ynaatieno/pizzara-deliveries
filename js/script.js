let selectItems = document.querySelectorAll(".select");
console.log(selectItems);
let pizzaItems = document.querySelectorAll(".menu__container");
console.log(pizzaItems);

for (let i = 0; i < selectItems.length; i++) {
  // console.log(selectItems[i])
  if (selectItems[i].textContent === `Chicken pizza`) {
    console.log(selectItems[i]);
    selectItems[i].classList.add(`active`);
  }
}
for (let p = 0; p < pizzaItems.length; p++) {
  console.log(pizzaItems[p]);
  if (pizzaItems[p].classList.contains("chicken")) {
    pizzaItems[p].style.display = "flex";
  } else {
    pizzaItems[p].style.display = "none";
  }
}
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    // console.log(selectItems[i])

    for (let i = 0; i < selectItems.length; i++) {
      if (selectItems[i].classList.contains(`active`)) {
        selectItems[i].classList.remove(`active`);
      }
    }
    selectItems[i].classList.add(`active`);

    let filterName = selectItems[i].textContent;
    console.log(filterName);

    if (filterName === "Chicken pizza") {
      for (let p = 0; p < pizzaItems.length; p++) {
        if (pizzaItems[p].classList.contains("chicken")) {
          pizzaItems[p].style.display = "flex";
        } else {
          pizzaItems[p].style.display = "none";
        }
      }
    } else if (filterName === "Pepperoni") {
      for (let p = 0; p < pizzaItems.length; p++) {
        console.log(pizzaItems[p]);
        if (pizzaItems[p].classList.contains("Pepperoni")) {
          pizzaItems[p].style.display = "flex";
        } else {
          pizzaItems[p].style.display = "none";
        }
      }
    } else if (filterName === "Margharita") {
      for (let p = 0; p < pizzaItems.length; p++) {
        console.log(pizzaItems[p]);
        if (pizzaItems[p].classList.contains("Margharita")) {
          pizzaItems[p].style.display = "flex";
        } else {
          pizzaItems[p].style.display = "none";
        }
      }
    } else if (filterName === "Hawaiian") {
      for (let p = 0; p < pizzaItems.length; p++) {
        console.log(pizzaItems[p]);
        if (pizzaItems[p].classList.contains("Hawaiian")) {
          pizzaItems[p].style.display = "flex";
        } else {
          pizzaItems[p].style.display = "none";
        }
      }
    } else if (filterName === "Meat") {
      for (let p = 0; p < pizzaItems.length; p++) {
        console.log(pizzaItems[p]);
        if (pizzaItems[p].classList.contains("Meat")) {
          pizzaItems[p].style.display = "flex";
        } else {
          pizzaItems[p].style.display = "none";
        }
      }
    }
  });
}

