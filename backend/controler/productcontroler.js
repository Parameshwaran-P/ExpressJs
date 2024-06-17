const productmodel = require('../models/productModel')


getProducts =async (req, res, next) =>{
    const product=await productmodel.find({})
    res.json({
        success: true,
        product
    })

}