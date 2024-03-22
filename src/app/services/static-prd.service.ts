import { Injectable } from '@angular/core';
import { Iproduct } from './../Models/iproduct';
@Injectable({
  providedIn: 'root'
})
export class StaticPrdService {
  products: Iproduct[];


  constructor() {
    this.products = [
      { id: 1, name: "Dell XPS 13", quantity: 2, price: 1200, imageUrl: "assets/p1.jpg", catId: 1 },
      { id: 2, name: "MacBook Air", quantity: 4, price: 1000, imageUrl: "assets/p2.jpg", catId: 2 },
      { id: 3, name: "HP Spectre x360", quantity: 6, price: 1300, imageUrl: "assets/p3.jpg", catId: 1 },
      { id: 4, name: "Asus ROG Zephyrus G14", quantity: 1, price: 1500, imageUrl: "assets/p4.jpg", catId: 2 },
      { id: 5, name: "Lenovo ThinkPad X1 Carbon", quantity: 0, price: 1400, imageUrl: "assets/p5.jpg", catId: 1 },
      { id: 6, name: "Apple tablet", quantity: 4, price: 1300, imageUrl: "assets/pexels-linkedin-sales-navigator-1251844.jpg", catId: 3 }
    ];
}

getall():Iproduct[]{
  return this.products
}
getbyid(ID:number):Iproduct|null{
  var prd=this.products.find((prd)=>prd.id==ID)
  return prd?prd:null
}
getbyCatId(Cid:number):Iproduct[]{
  if(Cid==0){
    return this.products

  }
  return this.products.filter((prd)=>prd.catId==Cid)

}
}
