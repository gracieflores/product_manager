var Product = require('../models/product.js');


module.exports = {
    index: (req, res) => {
        Product.find()
            .then(products => res.json({data: products}))
            .catch(err => res.json(err))
            //console.log(products)
    },
    show_one: (req, res) => {
        Product.findOne({_id: req.params.id})
            .then(product => {res.json(product);
            })
            .catch(err => res.json(err));
    },
    create: (req, res) => {
        product = new Product();
        product.title = req.body.title,
        product.price = req.body.price,
        product.image_url = req.body.image_url
        product.save()
            .then(product => res.json(product))
            .catch(err => res.json(err));
    },
    update: (req, res) => {
        var product_id = req.params.id;
        Product.findOne({_id: product_id})
            .then(updatedProduct => {
                updatedProduct.title = req.body.title;
                updatedProduct.price = req.body.price;
                updatedProduct.image_url = req.body.image_url;
                return updatedProduct.save();
            })
            .then(updatedProduct => res.json(updatedProduct))
            .catch(err => res.json(err));
        // Product.updateOne({_id: product_id},{
        //     name: req.body.name
        // })
        // .then(updatedProduct => res.json(updatedProduct))
        // .catch(err => res.json(err));
            
    },
    destroy: (req, res) => {
        Product.remove({_id: req.params.id})
        .then(deletedProduct => res.json({data: deletedProduct}))
        .catch(err => res.json(err));
    }
};