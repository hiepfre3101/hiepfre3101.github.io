const ListProduct = [
  {
      id: 1,
      name:"Big and Juicy Wagyu Beef Cheeseburger",
      price:30,
      desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
      image:"../images/item1.png",
      category:1,
      time:'30 minutes',
      type:'Snack'
  },
  {
      id: 2,
      name:"Fresh Lime Roasted Salmon",
      price:10,
      desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
      image:"../images/item2.png",
      category:1,
      time:'30 minutes',
      type:'Fish'
  },
  {
      id: 3,
      name:"The Best Easy One Pot Chicken and Rice",
      price:20,
      desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
      image:"../images/item3.png",
      category: 3,
      time:'30 minutes',
      type :'Snack'
  },
  {
      id: 4,
      name:"Fresh and Healthy Mixed Mayonnaise ",
      price:50,
      desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
      image:"../images/item4.png",
      category: 4,
      time:'30 minutes',
      type :'Healthy'
  },
  {
      id: 5,
      name:"The Creamiest Creamy Chicken",
      price:60,
      desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
      image:"../images/item5.png",
      category: 5,
      time:'30 minutes',
      type :'Noodles'
  },
  {
      id: 6,
      name:"Fruity Pancake with Orange & Blueberry",
      price:15,
      desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
      image:"../images/item6.png",
      category: 6,
      time:'30 minutes',
      type :'Sweet'
  }
];
function showCart() {
  
    const cartIcon = document.querySelector("#cart-icon");
  const cartBlock = document.querySelector(".nav-cart");
  if (cartBlock && cartIcon) {
    cartIcon.addEventListener("mouseover", function () {
      cartBlock.style.display = "block";
    });
    cartBlock.addEventListener("mouseover", function () {
      cartBlock.style.display = "block";
    });
    cartBlock.addEventListener("mouseout", function () {
      cartBlock.style.display = "none";
    });
  }
  
}
showCart();

// Thêm, xóa , hiển thị trang cart
  const itemAdded = [];
function addCart(indexAdd) {
  let itemObj = {
    id: ListProduct[indexAdd - 1].id,
    img: ListProduct[indexAdd - 1].image,
    name: ListProduct[indexAdd - 1].name,
    price: ListProduct[indexAdd - 1].price,
  };
  itemAdded.push(itemObj);
  const listInLocal = JSON.parse(localStorage.getItem("listInLocal"));
    listInLocal.push(itemObj);
    localStorage.removeItem('listInLocal');
    localStorage.setItem("listInLocal", JSON.stringify(listInLocal));
  const cartBlock = document.querySelector(".nav-cart");
  cartBlock.innerHTML += `<div class="item-added">
     <img src=${itemObj.img}>
    <p id="name-item">${itemObj.name}</p>
     <span>${itemObj.price}</span> <span>$</span>
     <i class="fa-solid fa-xmark" onclick="removeItem(${itemAdded.indexOf(
       itemObj
     )})"></i>
</div>`;
  renderCart();
}



function removeItem(indexRemove) {
  const listInLocal = JSON.parse(localStorage.getItem("listInLocal"));
  listInLocal.splice(indexRemove, 1);
  localStorage.removeItem("listInLocal");
  localStorage.setItem("listInLocal", JSON.stringify(listInLocal));//Xử lí mảng trong localstorage

  const cartBlock = document.querySelector(".nav-cart");
  const cartWrapper = document.querySelector(".cart-wrapper");
  if (itemAdded.length == 0) {
    if (cartBlock) {
      cartBlock.innerHTML = ` <button class="detail-cart" type="button" onclick="loadCart()">View Cart</button>`;
    }
  }
  if (listInLocal.length == 0) {
    if (cartWrapper) {
      cartWrapper.innerHTML = `<h1>Cart Empty</h1>`;
    }
  }
  if (itemAdded.length > 0) {
    itemAdded.splice(indexRemove, 1);
    cartBlock.innerHTML = ` <button class="detail-cart" type="button" onclick="loadCart()">View Cart</button>`;
    itemAdded.map(function (item, index) {
      cartBlock.innerHTML += `<div class="item-added">
   <img src=${item.img}>
  <p id="name-item">${item.name}</p>
   <span>${item.price}</span> <span>$</span>
   <i class="fa-solid fa-xmark" onclick="removeItem(${index})"></i>
</div>`;
    });
  }
  if (listInLocal.length > 0) {
    if (cartWrapper) {
      cartWrapper.innerHTML = ``;
      renderCart();
    }
  }
  totalMoney();
}

function loadCart() {
  location.assign("../html/cart.html");
}

function renderCart() {
  const listInLocal = JSON.parse(localStorage.getItem("listInLocal"));
  const cartWrapper = document.querySelector(".cart-wrapper");
  if (cartWrapper) {
    cartWrapper.innerHTML = ``;
    if (listInLocal) {
      if (listInLocal.length > 0) {
        listInLocal.map(function (item, index) {
          cartWrapper.innerHTML += ` <div class="item-cart">
           <img src=${item.img} alt="">
           <p id="name-item">${item.name}</p>
           <span id="price-item${index}">${item.price}</span>$ 
       </div>
     <form id="form-quantity">
        <input type="number" id="quantity${index}" value=1  min=1 onchange="moneyChanged(${index},${item.price})">
         <button id="remove-btn" onclick="removeItem(${index})" type="button">Delete</button>
     </form>`;
        }); //end of map method
      } else if (itemAdded.length == 0) {
        cartWrapper.innerHTML = `<h1>Cart Empty</h1>`;
      }
    } // end of if listInLocal= true
    else {
      cartWrapper.innerHTML = `<h1>Cart Empty</h1>`;
    }
  } //end of if cartWrapper = true
}
renderCart();


function totalMoney(){
  const listInLocal = JSON.parse(localStorage.getItem("listInLocal"));
  const totalDisable= document.querySelector('#total-money');
  if(totalDisable){
  if(listInLocal.length==0){
    totalDisable.value=0
  }else{
     listInLocal.reduce(function(initMoney,item){
       return totalDisable.value=initMoney+=item.price;
      },0)
  }
} 
}
totalMoney();

function moneyChanged (index,price){
    const priceItem = document.querySelector(`#price-item${index}`);
    const  priceInput = document.querySelector(`#quantity${index}`);
    const totalDisable= document.querySelector('#total-money');
    const totalPrice = parseInt(priceInput.value)*price;
    priceItem.innerHTML=``;
     priceItem.innerHTML=`<span id="price-item">${totalPrice}</span> `;
  totalDisable.value=chuaNghiTen();
}

function chuaNghiTen(){
  const listInLocal = JSON.parse(localStorage.getItem("listInLocal"));
   let totalRealTime=0;
  for(let i =0;i<listInLocal.length;i++){
  const priceItem = document.querySelector(`#price-item${i}`).innerText;
  totalRealTime+=parseInt(priceItem);
  } 
  return totalRealTime;
}

// đang bị lỗi sau khi tăng số lượng sản phẩm mà quay sang trang khác là bị resert số lượng ban đầu. Tìm cách sửa !!!!!!