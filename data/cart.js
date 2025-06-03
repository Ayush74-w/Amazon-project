export let cart=[
    {
    productid: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    quantity:2
    },{
        productid:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity:1
    }
]
export function addToCart(productid){
   let matchingitem;
  cart.forEach((cartitem)=>{
            if(productid===cartitem.productid){
      matchingitem= cartitem;
    }
  })
  if(matchingitem){
    matchingitem.quantity++;
  }
  else{
    cart.push({
            productid:productid,
      quantity:1
    })
  }


}
export function removeFromCart(productId){
    const newCart=[]
    newCart.forEach((cartItem)=>{
        if(cartItem.productId!==productId){
            newCart.push(cartItem)
        }
    })
    cart=newCart;
}