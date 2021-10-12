const { Smartphone, Laptop } =require("../db")

function fetchProducts(productCategory,done)
{
    $.get(`/api/${productCategory}`,function(data){
        done(data)
    })
}


function addProduct(productName,manufacturerName,productPrice,productImage,productCategory,done)
{
    $.post(`/api/${productCategory}`,{
        name:productName,
        manufacturer:manufacturerName,
        price:productPrice,
        image:productImage,
    },function(data){
        done(data)
    })
}




function createProductCard(product)
{
    let style,style1
    let category=product.category
    if(category=='smartphone')
    {
        
    }
    else if(category=="laptop")
    {
        style='style="padding-top:90%;"'
    }
    else if(category=='fashion')
    {
        style='style="padding-top:140%;"'   
        style1='style="height:330px;"' 
    }
        return $(` <div class="col-md-3">
        <div class="wsk-cp-product">
          <div class="wsk-cp-img">
            <img src="${product.image}" alt="Product" class="img-responsive" ${style1}/>
          </div>
          <div class="wsk-cp-text" ${style}>
            <div class="category">
              <span>${product.name}</span>
            </div>
            <div class="title-product">
              <h3>${product.manufacturer}</h3>
            </div>

            <div class="card-footer">
              <div class="wcf-left"><span class="price">Rs.${product.price}</span></div>
              <div class="wcf-right"><a class="buy-btn m"><i class="fa fa-shopping-cart"></i></a></div>
              <div class="wcf-right"><a class="wish-btn m"><i class="fa fa-heart"></i></a></div>
              <div class="wcf-right"><a class="share-btn m"><i class="fas fa-share"></i></i></a></div>            </div>
          </div>
        </div>
      </div>`
                )
}

// use if need to add product description
/* <div class="description-prod">
<p>Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link</p>
</div> */