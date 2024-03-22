import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Icategory } from '../../Models/icategory';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../products/products.component';
import { Iproduct } from '../../Models/iproduct';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule,CommonModule,ProductsComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements AfterViewInit {
  selectedCatId:number=0
  recivedtotalPrics:number=0
  catgories:Icategory[];
  cartItems: Iproduct[] =[] ;
  @ViewChild('username') inputElement!:Element //non null ex op
  constructor(){
    this.catgories=[
      {id:1 , name:"laptop"},
      {id:2 , name:"smart laptop"},
      {id:3 , name:"tablet"}

    ]


}
ngAfterViewInit(): void {
  // this.inputElement.nativeElement.value = "hasnaa";

  
}
changtotalprice(eventData: { totalOrderPrice: number, productName: string, price: number, count: number }) {
  this.recivedtotalPrics = eventData.totalOrderPrice;
  this.cartItems.push({
    id: 0, 
    name: eventData.productName,
    quantity: eventData.count,
    price: eventData.price,
    imageUrl: '', 
    catId: this.selectedCatId 
  });
}
} 
