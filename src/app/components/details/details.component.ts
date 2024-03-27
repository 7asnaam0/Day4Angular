import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaticPrdService } from '../../services/static-prd.service';
import { Iproduct } from '../../Models/iproduct';
import { Location } from '@angular/common';
import { ApiPrdService } from '../../services/api-prd.service';

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
    private location:Location , private _Api:ApiPrdService) {}

  ngOnInit(): void {
  //   this.productId = Number(this._ActivatedRoute.snapshot.paramMap.get('id'));
  // this.product=this._StaticPrdService.getbyid(this.productId)

  // this._Api.getByCatId(this.productId).subscribe({
  //   next:(res)=>{
  //     this.product=res
  //   },
  //   error:(e)=>{
  //  console.log(e)
  //   }
  // })
  }

  back(){
    this.location.back()
  }

}
