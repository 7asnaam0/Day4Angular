import { HighlightIteamDirective } from './../../directives/highlight-iteam.directive';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, OutputEmitterRef } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';
import { compileNgModule } from '@angular/compiler';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../Models/icategory';
import { FormsModule } from '@angular/forms';
import { NationalIdPipe } from '../../pipies/national-id.pipe';
import { CartIdPipe } from '../../pipies/cart-id.pipe';
import { StaticPrdService } from '../../services/static-prd.service';
import { Router, RouterLink } from '@angular/router';


import { ApiPrdService } from '../../services/api-prd.service';
StaticPrdService

@Component({
  selector: 'app-products',
  standalone: true,
  // to use ngfor , //for use 2 bind way panan in the box 
  imports: [CommonModule,FormsModule,HighlightIteamDirective,NationalIdPipe,CartIdPipe,RouterLink],

templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges,OnInit{
  @Input() receivedCatId: number = 0;
  //to see event in parent 
 @Output() AddToCart:EventEmitter<{ totalOrderPrice: number, productName: string, price: number, count: number }>
  //  products: Iproduct[];
  // categories: Icategory[];
  filterArr: Iproduct[] = [];
  totalorderprice: number = 0;


  constructor(private apiPrdService: ApiPrdService,private router: Router) {
    this.AddToCart=new EventEmitter<{ totalOrderPrice: number, productName: string, price: number, count: number }>()
  }
  ngOnInit():void{
    this.apiPrdService.getallproudcts().subscribe({
      next: (res: Iproduct[]) => {
        this.filterArr = res;
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
  }
  ngOnChanges() {
    //this.filterProductsByCatId();
  // this.filterbyCatIdArr=  this._StaticPrdService.getbyCatId(this.receivedCatId);
  this.apiPrdService.getByCatId(this.receivedCatId).subscribe({
    
  })
  }
  buy(prd: Iproduct) {
    if (prd.quantity > 0) {
      this.totalorderprice += prd.price * prd.quantity;
      prd.quantity--;
    } else {
      alert('Product out of stock!');
    }
  }
  navigate(id:number){
    //navigate(['/Details'])
    //this.router.navigateByUrl('/Details/')
    this.router.navigateByUrl(`/Details/${id}`);
  }
}
