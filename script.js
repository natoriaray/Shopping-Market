"use strict";

//declare all the variables used in code
const storeWrapper = document.querySelector('.productsGroup');
const cartWrapper = document.querySelector('.cartList')
let cartItems = [];

//list all the groceries in the store
const groceryItems = [
  {
    id: 1,
    name: 'Cheese',
    price: 1.00,
    img: "https://previews.dropbox.com/p/thumb/ACY8poDXHn2ljwGs8mZjPLv1VTfMelxkdAADv2AguHHfK7qzTjkuy24m6ItuE_Q51pO2DJJtIbbPbhNW7NQxnQFerG3Uo_96GH0vrqcsLG5c3XN3v9HDVm9nPxmDSzxUFHd3NkPtOKJDCPMx6Xds2XAE_xNbzx1H-MG8ifoNyMYgsqFFVUKiBiQrs3ydQbtwcyQJnqCJP8INoWqEhvHZ4Zp2iB1RqRTbf58PsEuBhM-J9zMzaK3zXDQi6kJd4PQvRtNrTPCln7NdnzTNCjfkkAmvDuPSobXdqz-dnSMvJ7cSbEEGyjpUYb29xwhZItzJ3SE/p.png"
  },
  {
    id: 2,
    name: 'Apple',
    price: 0.50,
    img: "https://previews.dropbox.com/p/thumb/ACYlZaTNhRS_fRtQXYnY42aLcxxkx6SadCOI8mUq3oEO-QCUohUh-mcGQaVEFQaMSoTBqdL3Iy2fOUP1Gq3i7uTQmokbjOjPirT2RiFpGM_gbtFbQ9S0q_rWVC4icLj2z8fQrsXBIkQlPQoWWozsZVlD-qzLQlkbK5nANMGdMXgyJlMkX6YmzpLcqa04pxhh0WGlvFmDEWQ9wJj1hswGZgNBR8nYJaPI2Tny2YuoYGLcVQbfcywaOeipBLfiupVkfPKxVv5V72jDEzk1w1riDk91lYraFdQU40k-A6cS8kw6UiFuY9y42Yh8XOAKC849FNBCUQGJnbVA32-pXVLlNTqX/p.png"
  },
  {
    id: 3,
    name: 'Bread',
    price: 2.25,
    img: "https://previews.dropbox.com/p/thumb/ACYB-7DDxmp6VNnXTjMHqPuBrVMzNk4aKIebABjj8CqNtF5L2AjqMe2y59XKujXhpCL01f-oINjy3fSBT7NAVFvucwEpjUYc3yBjSxSRPUk20M9aBEl_-i1r6nRV5MYPClafzKu3_fR9CtzhLl194r7Vnr2PHW7DhvsT6axd5j18qmGRqXstQZzJbT8-xb2SxWQDQ8x-VqMWKo62HNExdJhNxlo33_7SGyXXGYX5QLGpJlFRyQfCUhDuAqOa-_tx6yoQpJXecBwlO2MrGfaH06IgNIuWCk_51ihRHcFaF0G3XNxMxVhMY1ABaiMAbikP3BblOmwJR3OXqlkTASkEQ6dp/p.png"
  },
  {
    id: 4,
    name: 'Eggs',
    price: 3.75,
    img: "https://previews.dropbox.com/p/thumb/ACZ7o768BsrojxX-02NWZPARjkDHhMVKBBFz3yN8a2oKJS95TsfT6YjpJ84mcX7mBH3KK_XF1LyK_vvT5RoVYiGXsIwvZIOEAB2uprW5ZNkG4GpFVMYqcKwHiL9EmrGXrm712xPnsiyfn4Mn6X5sn767eq_gSLgtiXAxf8_xLX_0wnN2wHU9kEyZO7l6DaCaZscdTYAtkFNXLn3G6177koreYoWX3JfAAC7MeZ0b5CKyKi4mUst1m3JYFS6pq8jhJDCLdcIVo2qlP-_2dFK14XaXq5QgspIecB9QF0pry4yr5WMLUmSoPeNn67j96pjn3lx4s7dbZ0hu1o-vuQ0a8K7O/p.png"
  },
  {
    id: 5,
    name: 'Orange Juice Box',
    price: 0.95,
    img: "https://previews.dropbox.com/p/thumb/ACZtGK5EYH53-KhLN8iVTPu0mgxFcugb_6HbCezVcVob2Ing9Odbufek7-Zkq44TR-Cq6U8JDZ5QqliErBtTmkIXZyMVV9RKZu5bE04FNwrtXQrnhDFv_vsTCJDQh-SVOkAwq0_9ekEUbucrAZTM3v-9m_yLJRqHKBjQtS1EBVOgozAVH7VCgR9bYtccbj8VtPeXfcKKBFJOqZlOPyCdt08VIFdfoRJyyZvbnckeZMuN8EUUoOyQhQBshb3-wp82Xn7M4Gz-MF4V3nt4ppxEx7D_z0eoJi7e-XQHmaUNjS8DuqoEolkISeEJfOpZJMTBcCbrdgjgANVO7zNcXJVjd6XW/p.png"
  },
  {
    id: 6,
    name: 'Ketchup',
    price: 1.35,
    img: "https://previews.dropbox.com/p/thumb/ACbM2GQjX85PEreX6dT7IgPnr-FGqBF-BXNQuKeY-flwuz0z1aUMqtriEP6jNpZXpyeTaJ22h2znyCjYcg1ynyyw4Be9NSETaWvuXj8hM9Gqr-AptFhb5lA484xFiDyv2WjwPlmX-EnkNFlaWlekhxvWV-AdSUYuVbct4DDpcsyPGx4HUqmrPIOcGBAYyXPIz_GLPWHVZvqgOXXkb64nKTQHqzyXF_hSn-c26WMRnmRms4H8G22tPypums0ZMGQwalAIwXfL-90T-_9jImhRgngfJ752Z2QvAihrOuaDlQd2s_Aa7fUJe4GPzeyhgxkOoBfUiUIwR20yqKw2euNiHzuE/p.png"
  },
  {
    id: 7,
    name: 'Lettuce',
    price: 1.15,
    img: "https://previews.dropbox.com/p/thumb/ACbqR2avKdTwRGN8VglPKap9zPqRhozmisZIO5aBlv6KY2V2pZVHMKWLtaexZRvpFXMn3e9GnzCk3hujr6abivoHgIz5F4hVSYOvk-NDUTR9IPi_qd02KPAzzEUWENUqsR6b8IGDDYOrF-TDQTfDkaEyig2XdRxlq4asLiwow22KoMCnvIaRYWtGZuV49x_Kmob6zc03Iln4NFESrRDtFh6XSnE8I5xbQfvajXY8-nrqrKIcXJsNS7oaVcqt0fNrnfM0GPmysTA2IT1Nz5j6N1fn0duqXnp0v34UzV2FYNBcgPDKHTttg7wPIA4PO1NWh18DkQlu6gBWvFJbvgidIbN1/p.png"
  },
  {
    id: 8,
    name: 'Bananas',
    price: 0.75,
    img: "https://previews.dropbox.com/p/thumb/ACZV8fTHvG1rpLPPX1EXI7HU78tXftjWnlE4MxTVUHVkyWTr4mIuxdEUjsPZ8kOtj6DeHz7QLZDRfrhUKErTNJoEUFFO_8C_31ULDI8yjBV2-Vv3UVGXmoyg664F9TGFizoE1Y4Wdse197v-yyo6RPqa5SN_7gi6HXkvW2ONQMPa4DPOmt7gWz9pAKFxQzt1CcT1LIVPIgIUU3nCbMhr9vqIvvPYoPwYLVRQQSPLECrTqAcaWU2yn0s641jZT9JZVWLAk7JqzdHzZQuEg8V7QC0ZA8zli8MxyAmeAfxqCpw3pE9kBUuYi68rSAesTf_ISy3FvTTnGv49aIiEBIYNWS6F/p.png"
  },
  {
    id: 9,
    name: 'Milk',
    price: 3.05,
    img: "https://previews.dropbox.com/p/thumb/ACb2YQjbfAWGkBbSKEMyf6j8gwHDPqcTBfDiyoP3r-yzy3fIsQgy4wfVL4NsgUsK7zOQTNABgx2D23TaUxePufhJMQaqp08MfeZLEBqpPChJw5Q6GCeGN9WGyCo33RK1Gaau7EdAY_Pja3TxJC58Q8TBWM2_04UANugxZ406TPAabUiXjxEHSli9xLNr60hOQjNtWLJnkcIDrueV0y3Pm61c6iHShrwQZNoAA-IG_sgv_hitgv-EViO3FjphzuEmsz9nSHPZ2sVrnO_oB5X1y7Fc5JK81wXYooPt3PFk9ZmC34qVgewXjXYiExxcAM9Fp0qPVjvAG6KlNG8xq9LXXJSB/p.png"
  },
  {
    id: 10,
    name: 'Apple',
    price: 0.50,
    img: "https://previews.dropbox.com/p/thumb/ACY8poDXHn2ljwGs8mZjPLv1VTfMelxkdAADv2AguHHfK7qzTjkuy24m6ItuE_Q51pO2DJJtIbbPbhNW7NQxnQFerG3Uo_96GH0vrqcsLG5c3XN3v9HDVm9nPxmDSzxUFHd3NkPtOKJDCPMx6Xds2XAE_xNbzx1H-MG8ifoNyMYgsqFFVUKiBiQrs3ydQbtwcyQJnqCJP8INoWqEhvHZ4Zp2iB1RqRTbf58PsEuBhM-J9zMzaK3zXDQi6kJd4PQvRtNrTPCln7NdnzTNCjfkkAmvDuPSobXdqz-dnSMvJ7cSbEEGyjpUYb29xwhZItzJ3SE/p.png"
  },
  {
    id: 11,
    name: 'Apple',
    price: 0.50,
    img: "https://previews.dropbox.com/p/thumb/ACY8poDXHn2ljwGs8mZjPLv1VTfMelxkdAADv2AguHHfK7qzTjkuy24m6ItuE_Q51pO2DJJtIbbPbhNW7NQxnQFerG3Uo_96GH0vrqcsLG5c3XN3v9HDVm9nPxmDSzxUFHd3NkPtOKJDCPMx6Xds2XAE_xNbzx1H-MG8ifoNyMYgsqFFVUKiBiQrs3ydQbtwcyQJnqCJP8INoWqEhvHZ4Zp2iB1RqRTbf58PsEuBhM-J9zMzaK3zXDQi6kJd4PQvRtNrTPCln7NdnzTNCjfkkAmvDuPSobXdqz-dnSMvJ7cSbEEGyjpUYb29xwhZItzJ3SE/p.png"
  },
  {
    id: 12,
    name: 'Water',
    price: 1.65,
    img: "https://previews.dropbox.com/p/thumb/ACa-PgXWZmZbqUj13WImGdyGKCmm-STc-UihVBX1XGRCoDTZYlzsCslvoUHX5QIurekYDs-IrB5-8n5p8xgLSMGeXtNsiTm5hJMURJS8S4myWeBCewrhconFErtFCM1tSd7JuOR95_t-sz2p1yRNbeitZoF35wEkZDQjks0_txuZ9Y7u6JrQiYoukWz6zdSilB0c8Y14IRvAvkaSDruf2ySSe_Zdb1Z0gvU1MjHgu9SRIE1wc6j1pF5QFWXMEFPMjNbf7vFSVuIIfd0L3zANQj75QnQ1cPg-0Z7a7kAvKG1pBHO1M9zijox1jeScyKkhgp-zVvXPilxNAorH_xkZlza2/p.png"
  }
];

//display grocery items in the store
const displayGroceryItems = function(itemsArr) {
  storeWrapper.innerHTML = '';
  
  groceryItems.forEach(function(item, i) {
  const html = `<div class="item">
      <div class="imgWrapper">
        <img src=${item.img}></img>
      </div>
      
      <p class="itemPrice">$${item.price.toFixed(2)}/each</p>
      <p class="itemName">${item.name}</p>      
      <div class="selWrapper">
        <div class="qtyBtns">
          <button onclick="decrease(this)" class="incDecBtn">-</button>
          <span class="qtyNum">0</span>
          <button onclick="increase(this)" class="incDecBtn">+</button>
        </div>
        <button class="addToCartBtn btn_${i}" onclick="addItemToCart(this, cartItems)">ADD TO CART</button>
      </div>
      
    </div>`;
  
 storeWrapper.insertAdjacentHTML('beforeend', html);
});
};

displayGroceryItems(groceryItems);

//display qty amount and add functionality to store buttons in productsGroup

let increase = function(btn) {
  const addQtyBtn = btn;
  const qtyInput = addQtyBtn.previousElementSibling;
  qtyInput.textContent = parseInt(qtyInput.textContent) + 1;
}

let decrease = function(btn) {
  const addQtyBtn = btn;
  const qtyInput = addQtyBtn.nextElementSibling;
  
  if (qtyInput.textContent > 0) {
    qtyInput.textContent = parseInt(qtyInput.textContent) - 1;
  } else {
    return;
  }
  
};

//add items to cart array

const addItemToCart = function(btnClicked, arr) {
  const itemToAdd = groceryItems.find(function(item, i) {
    return btnClicked.classList.contains(`btn_${i}`);
  })    
  
  arr.push(itemToAdd);
  displayCartItems(arr);
};

//display cart items array
const displayCartItems = function(itemsArr) {
  cartWrapper.innerHTML = '';
  
  itemsArr.forEach(function(item, i) {
  const html = `<div class="cartItem">
         <div class="carImgWrapper">
           <img class="cartImg" src="${item.img}">
           </div>
           <div class="cartDescription">
             <p class="itemPrice">$${item.price.toFixed(2)}/each</p>
             <p class="itemName">${item.name}</p> 
           </div>
        
           <div class="cartQtyWrapper">
             <button class="incDecBtn">-</button>
             <span class="qtyNum">2</span>
             <button class="incDecBtn">+</button>
           </div>
          </div>`;
  
 cartWrapper.insertAdjacentHTML('beforeend', html);
});
};

