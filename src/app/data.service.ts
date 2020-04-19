import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import { throwError, BehaviorSubject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class DataService {
  
  constructor(private http: HttpClient) {
    
  }

  createStore(args: {
    requester: string;
    storeRegistrationParams: {
      name: string;
      bannerImgUrl: string;
      addresses: {
        streetAddress: string;
        streetAddress2: string;
        zipCode: string;
        city: string;
        state: string;
        country: string;
      }[];
    };
  }) {
    return this.http.post(`${environment.LOT_API}/outlet/${args.requester}`, {
      info: args.storeRegistrationParams
    });
  }

  fetchUserOutlets(args: { owner: string; requester: string }) {
    try {
      return this.http.get(`${environment.LOT_API}/outlet/${args.owner}`);
    } catch (error) {
      throw error;
    }
  }

  fetchUserOutletandListings(args: {
    owner: string;
    requester: string;
    outletId: string;
  }) {
    try {
      return this.http.get(
        `${environment.LOT_API}/outlet/${args.owner}/outlet/${args.outletId}`
      );
    } catch (error) {
      throw error;
    }
  }

  //BuyOrder ops

  fetchBuyOrders(args: {
    requester: string;
    index?: string;
    query: {
      text?: string;
      filters?: {};
      sortby: string;
      limit: string;
    };
  }) {
    try {
      const routeParams = "";
      return this.http.get(
        `${environment.LOT_API}/connect/asks?${routeParams}`
      );
    } catch (error) {
      throw error;
    }
  }

  fetchUserAsks(){ 
    try {
      return this.http.get('');
    } catch (error) {
      throw error;
    }
  }

  createBuyOrder(args: { 
    requester,
    orderInfo: { 
      "details": {
        "size": string,
        "color": string,
        "condition": string,
        "originalPackaging": string
      },
      "indexId": string,
      "username": string,
      "phoneNumber": string,
      "email": string,
      "price": string
    }
  }){
    try {
      const info = args.orderInfo;
      this.http.post(`${environment.LOT_API}/outlet/${args.requester}/buyOrder`, {info});
    } catch (error) {
      throw error;
    }
  }

  searchItemIndex(args: { 
    index? :string,
    text: string,
  }){ 
    try {
      return this.http.post(
        `${environment.LOT_API}/connect/index/search`,
        {info: {
          index: args.index? args.index: "",
          query: {
            text: args.text
          }
        }}
      );
    } catch (error) {
      throw error;
    }
  }

  searchListings(args: {
    query: {},
  }) {
    try {
      return this.http.get(
        `${environment.LOT_API}/outlet/search/listings?${args.query}`,
      );
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  fetchItemDetails(id){
    try {
      return this.http.get(
        `${environment.LOT_API}/outlet/${id}/listing`,
      );
    } catch (error) {
      throw error;
    }
  }


  // fetchUserOrders(args: {id: string }){
  //   try {
  //     return this.http.get(`${environment.LOT_API}`)
  //   } catch (error) {
  //     throw error;
  //   }
  // }
}
