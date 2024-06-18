const productmodel = require('../models/productModel')


const getProducts =async (req, res, next) =>{
    const product=await productmodel.find({})
    res.json({
        success: true,
        product
    })

}

module.exports = getProducts