$(function(){

    let productCategory=$('#productCategory')
    let productName=$('#productName')
    let productManufacturer=$('#productManufacturer')
    let productPrice=$('#productPrice')
    let productImage=$('#productImage')
    $('#btnProductAdd').click(function(){

        addProduct(
            productName.val(),
            productManufacturer.val(),
            productPrice.val(),
            productImage.val(),
            productCategory.val(),
            
            function(addedProduct)
            {
                window.alert("Added "+ addedProduct.name +" to Database")
            }
        )
    })
})