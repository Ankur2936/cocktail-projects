import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommanService {
 public url:string='https://www.thecocktaildb.com/api/json/v1/1/search.php?s';
 public sharedData:any
  constructor(private http: HttpClient,private route:ActivatedRoute) { }



  public getAlltheCocktailData(cocktailName:string){
        return this.http.get(`${this.url}=${cocktailName}`)
   
}
setSharedData(data: any) {
  this.sharedData = data;
}

getSharedData(): any {
  return this.sharedData;
}
}