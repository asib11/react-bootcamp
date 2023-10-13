// const fakeDB = id => {
//     const quantity = localStorage.getItem(id);
//     if(quantity){
//         const newQuantity = parseInt(quantity) + 1;
//         localStorage.setItem(id, newQuantity);
//     }else{
//         localStorage.setItem(id,1);
//     }
// }

const fakeDB = id => {
    let shoppingCart;

    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }else{
        shoppingCart = {};
    }

    //add item
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

export {fakeDB}