import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = [];


  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    let observable = this._httpService.getProducts();
    observable.subscribe(data => {
      console.log("Got our Products!", data)
      this.products = data['data'];
    });
  }
  delete(id) {
    let observable = this._httpService.deleteProduct(id);
    observable.subscribe(data => {
      console.log("Got data to delete Product!", data);
    })
    this.getAll();
  }

}
