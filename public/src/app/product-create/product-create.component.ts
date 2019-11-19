import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  newProduct:  any = {
    title: "",
    price: "",
    image_url: ""
  }
  errs: any = [];

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
  }
  addProductEvent() {
    let observable = this._httpService.addProduct(this.newProduct);
    observable.subscribe(data => {
      if(data['errors']){
        if(data['errors']['title']['message'])
        this.errs.push(data['errors']['title']['message'])
        if(data['errors']['price']['message'])
        this.errs.push(data['errors']['price']['message'])
        if(data['errors']['image_url']['message'])
        this.errs.push(data['errors']['imagle_url']['message'])
        console.log("errors: ", this.errs)
      }
      else{
        console.log("Got data from post back!", data)
      
      this.newProduct = { title: "", price: "", image_url: "" }
      this.goHome()
      }
    });
  }
  goHome() {
    this._router.navigate(['/products']);
  }
}
