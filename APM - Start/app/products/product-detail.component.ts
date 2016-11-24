import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from './product';

@Component({
    moduleId: module.id,
    templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent {
    pageTitle: string = 'Product Detail';
    Product: IProduct;

    constructor(private _route: ActivatedRoute){

    }
    
    ngOnInit(): void{
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
    }
}