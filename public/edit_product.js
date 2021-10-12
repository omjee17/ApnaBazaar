$(function(){

    let showDataList=$('#btnProductEdit')
    let productCategory=$('#productCategory')
    let productTableDiv=$('#productList')
    
    showDataList.click(function(){
        productTableDiv.css("display","block")
        addProductToTable(productCategory.val())
    })
    
    function enableDeleteBtn(productCategory){

        let deleteBtn=$('.btnDelete')
        for(let i=0;i<deleteBtn.length;i++)
        {
            let btn=deleteBtn[i]
            btn.addEventListener('click',function(){
                let item=btn.parentElement.parentElement
                let id=item.querySelector('.productId').innerText.substr(5)
                
                $.ajax({
                    url: `/api/${productCategory}/${id}`,
                    type: 'DELETE',
                    success: function(result) {
                        item.remove()
                    }
                })
            })
        }
    }

    function enableEditBtn(productCategory)
    {
        let editBtn=$('.btnEdit')
        for(let i=0;i<editBtn.length;i++)
        {
            let btn=editBtn[i]
            btn.addEventListener('click',function(){
                
                let item=btn.parentElement.parentElement
                let id=item.querySelector('.productId').innerText.substr(5)
                let editedName=item.querySelector('.productName').innerText
                let editedManufacturer=item.querySelector('.productManfacturer').innerText
                let editedPrice=item.querySelector('.productPrice').innerText


                $.ajax({
                    url: `/api/${productCategory}/${id}`,
                    type: 'PUT',
                    data:{
                        name:editedName,
                        manufacturer:editedManufacturer,
                        price:editedPrice,
                    },
                    success: function(result) {
                        console.log("Done");
                    },
                    error:function(err){
                        console.log("Error in editing");
                    }
                })
            })
        }
    }

    function addProductToTable(productCategory){

        $.get(`api/${productCategory}`,function(data){
            let productTable=$('#productTable')
            productTable.empty()

            productTable.append($(`
            <tr>
            <th>No.</th>
            <th>Product id</th>
            <th>Product Name</th>
            <th>Manufacturer</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Delete</th>
            </tr>`
            ))
            let count=0;
            for(product of data)
            {
                productTable.append($(
                   `
                   <tr>
                    <td >${count++}</td>
                    <td class="productId">0x${productCategory.substr(0,3)}${product.id}</td>
                    <td class="productName" contenteditable='true'>${product.name}</td>
                    <td class="productManfacturer" contenteditable='true'>${product.manufacturer}</td>
                    <td class="productPrice" contenteditable='true'>${product.price}</td>
                    <td contenteditable='true'><button class="btnEdit"><i class="fa fa-pen"></i></button></td>
                    <td contenteditable='true'><button class="btnDelete"><i class="fa fa-trash-alt"></i></button></td>
                </tr>
                   `
               ))
            }
        })
        .then((data)=>{
            enableDeleteBtn(productCategory)
            enableEditBtn(productCategory)
        })
    }



    
})