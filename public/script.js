
function script(){
   
    let dropdownCart=$('#dropdownCart')
    let wishlist=$('#dropdownWishlist')
    let buy_btn=$('.buy-btn')
    let wish_btn=$('.wish-btn')
    

    for(let i=0;i<wish_btn.length;i++)
    {
        let wish_item=wish_btn[i]
        wish_item.addEventListener('click',function(){
            let item=wish_item.parentElement.parentElement.parentElement.parentElement
            let productImage=item.querySelector('img').src //getting image
            let productName=item.querySelector('span').innerText //getting product name
            let productPrice=item.querySelector('.price').innerText //getting product price 

            wishlist.prepend(createCartItem(productImage,productName,productPrice))
            enableDelete()
        })
    }


    for(let i=0;i<buy_btn.length;i++)
    {
        let buy_item=buy_btn[i]
        buy_item.addEventListener('click',function(){
            let item=buy_item.parentElement.parentElement.parentElement.parentElement
            let productImage=item.querySelector('img').src //getting image
            let productName=item.querySelector('span').innerText //getting product name
            let productPrice=item.querySelector('.price').innerText //getting product price 

            dropdownCart.prepend(createCartItem(productImage,productName,productPrice))
            updateCartTotal()
            enableDelete()
        })
    }



    function enableDelete(){
        let remove_btn=$('.remove-btn')
        for(let i=0;i<remove_btn.length;i++)
        {
            let btn=remove_btn[i];
            btn.addEventListener('click',function(){
                btn.parentElement.parentElement.remove()
                updateCartTotal()
            })
        }
    }
    

    function updateCartTotal(){
        let cartItemContainer=$('.cart-item')
        let Price=0;
        for(let i=0;i<cartItemContainer.length;i++)
        {
            var cartItem=cartItemContainer[i]

            let priceItem=cartItem.querySelector('.price').innerText //get price
            let value=priceItem.substring(3) //Remove Rs from price
            Price+=parseInt(value)
        
        }
        
        $("#totalPrice").empty()
        $("#totalPrice").append(`<span>Total:${Price}</span> `) //append the total price

    }


    function createCartItem(image,name,price)
    {
        return $(`
            <div class="cart-item">
                <li> 
                    <img src="${image}" height="50px" class="d-inline">
                    <div class="d-inline"><span>${name}</span></div>
                    <div class="d-inline price"><span>${price}</span></div>
                    <a class="remove-btn d-inline-block"><i class="fas fa-times"></i></a>
                </li>
                <hr>
            </div>
        `)
    }
}
