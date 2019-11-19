import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  selectedProduct: any;
  
  errs: any = [];

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.getProduct(params['id']);
    });
  }
  getProduct(id) {
    let observable = this._httpService.getOneProduct(id);
    observable.subscribe(data => {
      console.log("Got one product", data)
      this.selectedProduct = data;
      console.log(this.selectedProduct)
  })
}
  goHome() {
    this._router.navigate(['/products']);
  }
  edit(id) {
    console.log(id)
    //console.log(this.updatedProduct)
    let observable = this._httpService.editProduct(id, this.selectedProduct);
    observable.subscribe(data => {
      if(data['errors']){
        console.log(data['errors'])
        if(data['errors']['title']['message'])
        this.errs.push(data['errors']['title']['message'])
        if(data['errors']['price']['message'])
        this.errs.push(data['errors']['price']['message'])
        console.log("errors: ", this.errs)
      }
      else{
        console.log("selected our Product!", data);
        //this.updatedProduct = { title: "", price: "", image_url: "" }
        
        this.goHome()
      }
    });
  }
}
