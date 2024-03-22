import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaticPrdService } from '../../services/static-prd.service';
import { Iproduct } from '../../Models/iproduct';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  productId:number = 0
  product:Iproduct|null=null
  constructor(private _ActivatedRoute: ActivatedRoute,
    private _StaticPrdService:StaticPrdService,
    private location:Location) {}

  ngOnInit(): void {
    this.productId = Number(this._ActivatedRoute.snapshot.paramMap.get('id'));
  this.product=this._StaticPrdService.getbyid(this.productId)
  }

  back(){
    this.location.back()
  }

}
