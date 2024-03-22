import { HighlightIteamDirective } from './../../directives/highlight-iteam.directive';
import { Component, EventEmitter, Input, OnChanges, Output, OutputEmitterRef } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';
import { compileNgModule } from '@angular/compiler';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../Models/icategory';
import { FormsModule } from '@angular/forms';
import { NationalIdPipe } from '../../pipies/national-id.pipe';
import { CartIdPipe } from '../../pipies/cart-id.pipe';
import { StaticPrdService } from '../../services/static-prd.service';
import { Router, RouterLink } from '@angular/router';
StaticPrdService

@Component({
  selector: 'app-products',
  standalone: true,
  // to use ngfor , //for use 2 bind way panan in the box 
  imports: [CommonModule,FormsModule,HighlightIteamDirective,NationalIdPipe,CartIdPipe,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges {
  @Input() receivedCatId: number = 0;
  //to see event in parent 
 @Output() AddToCart:EventEmitter<{ totalOrderPrice: number, productName: string, price: number, count: number }>
  //  products: Iproduct[];
  categories: Icategory[];
  filterbyCatIdArr: Iproduct[];
  totalorderprice:number=0

  constructor(private _StaticPrdService:StaticPrdService,private router:Router) {
    this.filterbyCatIdArr=this._StaticPrdService.products
    // this.products = [
    //   { id: 1, name: "Dell XPS 13", quantity: 2, price: 1200, imageUrl: "assets/p1.jpg", catId: 1 },
    //   { id: 2, name: "MacBook Air", quantity: 4, price: 1000, imageUrl: "assets/p2.jpg", catId: 2 },
    //   { id: 3, name: "HP Spectre x360", quantity: 6, price: 1300, imageUrl: "assets/p3.jpg", catId: 1 },
    //   { id: 4, name: "Asus ROG Zephyrus G14", quantity: 1, price: 1500, imageUrl: "assets/p4.jpg", catId: 2 },
    //   { id: 5, name: "Lenovo ThinkPad X1 Carbon", quantity: 0, price: 1400, imageUrl: "assets/p5.jpg", catId: 1 },
    //   { id: 6, name: "Apple tablet", quantity: 4, price: 1300, imageUrl: "assets/pexels-linkedin-sales-navigator-1251844.jpg", catId: 3 }
    // ];

    this.categories = [
      { id: 1, name: "laptop" },
      { id: 2, name: "smart laptop" },
      { id: 3, name: "tablet" }
    ];

    //this.filterbyCatIdArr = this.products;
    this.AddToCart=new EventEmitter<{ totalOrderPrice: number, productName: string, price: number, count: number }>()
  }

  ngOnChanges() {
    //this.filterProductsByCatId();
  this.filterbyCatIdArr=  this._StaticPrdService.getbyCatId(this.receivedCatId)
  }
  buy(prd: Iproduct) {
    if (prd.quantity > 0) {
      this.totalorderprice += prd.price * prd.quantity;
      //when event fire
      this.AddToCart.emit({ totalOrderPrice: this.totalorderprice, productName: prd.name, price: prd.price, count: 1 });
      prd.quantity--; 
    } else {
      alert('Product out of stock!');
    }
  }
  navigate(id:number){
    //navigate(['/Details'])
    //this.router.navigateByUrl('/Details/')

    this.router.navigateByUrl(`/Details/${id}`)
  }
  

  // filterProductsByCatId() {
  //   if (this.receivedCatId == 0) {
  //     this.filterbyCatIdArr = this.products;
  //   } else {
  //     this.filterbyCatIdArr = this.products.filter(prd => prd.catId == this.receivedCatId);
  //   }
  // }
}
