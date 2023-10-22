import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommanService } from '../comman.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
//   public cocktailName:string='';

//   constructor(private route:ActivatedRoute,private commanService:CommanService) {
//     this.route.params.subscribe((params) => {
//       this.cocktailName = params['cocktailName'];
//       if(this.cocktailName!=''){
//         this.getcocktailDataByName();
//       }
//     })    
//   }

// public getcocktailDataByName(){
//  this.commanService.getAlltheCocktailData(this.cocktailName).subscribe((res:any)=>{
//    console.log(res);
//  })
// }

  ngOnInit(): void {
  }


}
