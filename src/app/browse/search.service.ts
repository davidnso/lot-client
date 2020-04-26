import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import { throwError, BehaviorSubject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {
    
  }

  submitSearchQuerybyCategory(args: {
    text: string,
    category: string,
  }){ 
    const queryParams = 
      `text=${args.text}&category=${args.category}`
    return this.http.get(`${environment.LOT_API}/outlet/search/listings?${queryParams}`);

  }

  submitPlainSearchQuery(args: {
    text: string
  }){
    const queryParams = 
      `text=${args.text}`
    return this.http.get(`${environment.LOT_API}/outlet/search/listings?${queryParams}`);

  }

  private buildSearchQuery(params: {[x:string]: string}){ 
    let queryString =``;
    const keys = Object.keys(params); 
    keys.forEach((key,index)=>{
      if(index===0){
        queryString.concat(`${key}=${params[key]}`)
      }
      queryString.concat()
    })
  }
}
