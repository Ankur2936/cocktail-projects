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
  filter: string = 'all'; // 'all' represents no filter initially
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
onFilterChange() {
  if (this.filter === 'Alcoholic') {
    // Filter alcoholic drinks
    const data = this.drinklist.filter((data) => data.strAlcoholic === 'Alcoholic');
    this.drinklist=data?data:[]
  } else if (this.filter === 'Non-Alcoholic') {
    // Filter non-alcoholic drinks
    const data = this.drinklist.filter((data) => data.strAlcoholic === 'Non alcoholic');
    this.drinklist=data?data:[]
  }else if (this.filter === 'all') {
    this.getcocktailDataByName();
  }
  
}


  ngOnInit(): void {
  }


}
