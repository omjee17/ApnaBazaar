const Product = require('../../db').Smartphone
const route = require('express').Router()

route.get('/', (req, res) => {
    // We get all the products

    Product.findAll()
        .then((products) => {
            res.status(200).send(products)
        })
        .catch((error) => {
            res.status(500).send({
                error: "Could not retrieve products"
            })
        })

})

route.post('/', (req, res) => {
    // Validate the values

    if(isNaN(req.body.price))
    {
        return res.status(403).send({
            error:"Price is not valid number"
        })
    }
    // We will create a new prodcut 
    
    Product.create({
        name: req.body.name,
        manufacturer:req.body.manufacturer,
        price:parseFloat(req.body.price),
        image:req.body.image

    }).then((product) => {
        res.status(201).send(product)
    }).catch((error) => {
        res.status(501).send({
            error: "Error adding product"
        })
    })
})

route.put('/:id',(req,res)=>{

    let primaryKey=parseInt(req.params.id)
    // check if adata to be edited exists in database
    Product.findOne({where:{id:primaryKey}})
    .then((data)=>{
        // if data exists update
        if(data!=null)
        {
            console.log("Helloo");
            updateData(req,res,data)
        }
        else  //data does not exists
        {
            res.send("Data does not exists")
        }
    })
    .catch((err)=>{
        //if any error occurs send err as response
        res.send(err);
    })

})


route.delete('/:id',(req,res)=>{

    let primaryKey=parseInt(req.params.id)
   
    // check if adata to be deleted exists in database
    Product.findOne({where:{id:primaryKey}})
    .then((data)=>{
        if(data!=null)
        {
            Product.destroy({
                where:{
                    id:primaryKey
                }
            })
            .then((result)=>{
                console.log(result);
                res.send("Data deleted successfully")
                
            })
            .catch((err)=>{
                res.send(err)
            })
        }
        else
        {
            res.send("Data does not exists")
        }
    })
    .catch((err)=>{
        res.send(err)
    })
})




function updateData(req,res,data){

    let primaryKey=parseInt(req.params.id)
   
    if(req.body.name===undefined)
    {
        req.body.name=data.name
    }
    if(req.body.manufacturer===undefined)
    {
        req.body.manufacturer=data.manufacturer
    }
    if(req.body.price===undefined)
    {
        req.body.price=data.price
    }
    if(req.body.image===undefined)
    {
        req.body.image=data.image
    }

    Product.update({
        name:req.body.name,
        manufacturer:req.body.manufacturer,
        price:parseFloat(req.body.price),
        image:req.body.image,
    },
    {where:{id:primaryKey}})
    .then(result=>{
       res.send(result)
    })
}


exports = module.exports = route