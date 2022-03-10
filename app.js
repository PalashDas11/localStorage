const displayLocalStorageCart = () => {
    const cartList = getCart();
    for(const list in cartList){
        displayItem(list);
    }
}



const addItem = () => {
     const inputField = document.getElementById('input-field');
     const inputValue = inputField.value;
     if(!inputValue){
         return ;
     }
    displayItem(inputValue);
    addItemToCart(inputValue);

    inputField.value = '';
    
    }

const displayItem = (inputValue) => {
    const ul = document.getElementById('item');
    const li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = inputValue;
   

}
// get cart 

 const getCart = () =>{
     const cart = localStorage.getItem('cart');
     let cartObj;

     if(cart){
       cartObj = JSON.parse(cart);
     }else{
         cartObj = {};
     }
     return cartObj;
 }

// set two value
 const addItemToCart = inputValue =>{
    const getItem = getCart();
    // console.log(getItem)
  

    if(getItem[inputValue]){
         getItem[inputValue] += 1;
     }else{
         getItem[inputValue]= 1;
     }
     const cartStrigify = JSON.stringify(getItem);
     localStorage.setItem('cart', cartStrigify);
     
    
 }



// clear all list 
 const clearAll = () => {
    document.getElementById('item').textContent= '';
 }

 displayLocalStorageCart();