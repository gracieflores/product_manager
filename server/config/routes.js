product = require('../controllers/products.js')

module.exports = function(app){
    app.get('/products', product.index);
    app.get('/product/:id', product.show_one);
    app.post('/product', product.create);
    app.put('/product/:id', product.update);
    app.delete('/product/:id', product.destroy);
};