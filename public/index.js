
$(function(){
    
    let productList=$('#product-list')
    let liLaptop=$('#liLaptop')
    let liSmartphone=$('#liSmartphone')
    let liFashion=$('#liFashion')

    var defaultvalue ='smartphone' // getting smartphones when website getting loaded
    let getproducts=function(){
        
        fetchProducts(defaultvalue,function(products){
            productList.empty()

            for(product of products)
            {
                productList.append(createProductCard(product))
            }
            script()
        })
    }

    getproducts()

    liLaptop.click(function(){
        defaultvalue='laptop'
        getproducts()
    })
    liSmartphone.click(function(){
        defaultvalue='smartphone'
        getproducts()
    })
    liFashion.click(function(){
        defaultvalue='fashion'
        getproducts()

    })




    // catogries tabs heading
    $("li").on("click", function(){
        $("LI").removeClass("selected");
        $(this).toggleClass("selected", true);
      })
})