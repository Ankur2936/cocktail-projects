import { Component, OnInit } from '@angular/core';
import { CommanService } from 'src/app/comman.service';
import { CocktailModel } from '../cocktail.model';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent implements OnInit {
  public detailsData:any;

  constructor(private commanservice:CommanService) {
    this.detailsData = this.commanservice.getSharedData();
    if(this.detailsData==undefined || this.detailsData==null){
     this.detailsData=JSON.parse(localStorage.getItem('cocktailData')||'{}');
     
   }
  }
  

   

  ngOnInit(): void {
  }

}
