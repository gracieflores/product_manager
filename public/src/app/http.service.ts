import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getProducts(){
    return this._http.get('/products');
  }
  getOneProduct(id){
    return this._http.get(`/product/${id}`);
  }
  addProduct(newProduct){
    console.log('add new: ' + newProduct)
    return this._http.post('/product', newProduct);
  }
  editProduct(id, product){
    console.log(id)
    console.log(product)
    return this._http.put(`/product/${ id }`, product);
  }
  deleteProduct(id){
    return this._http.delete('/product/' + id);
  }
}
