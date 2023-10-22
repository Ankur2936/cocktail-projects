import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommanService } from '../comman.service';
import { CocktailModel } from './cocktail.model';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent implements OnInit {

  public cocktailName:string;
  public drinklist:Array<CocktailModel>=[];

  constructor(private route:ActivatedRoute,private commanService:CommanService) {
      this.cocktailName = this.route.snapshot.url[0].path;
      if(this.cocktailName){
        this.getcocktailDataByName();
      }
    // })    
  }

public getcocktailDataByName(){
 this.commanService.getAlltheCocktailData(this.cocktailName).subscribe((res:any)=>{
  console.log(res);
   this.drinklist=res.drinks;
 })
}

navigatetoDetails(data:any){
  this.commanService.setSharedData(data);
  localStorage.removeItem('cocktailData')
  localStorage.setItem('cocktailData', JSON.stringify(data))
}


  ngOnInit(): void {
  }


}
