import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DataService { 

    constructor(private http: HttpClient) {}

    createStore(args: {
        requester: string,
        storeRegistrationParams: {
        name: string,
        bannerImgUrl: string
        addresses:
      {
        streetAddress: string;
        streetAddress2: string;
        zipCode: string;
        city: string;
        state: string;
        country: string;
      }[]
    }}) {
       return this.http.post(`${environment.LOT_API}/outlet/${args.requester}`, { info: args.storeRegistrationParams});
    }
}