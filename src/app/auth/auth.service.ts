import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(loginInfo: { username: string; password: string }) {
    console.log(loginInfo);
    return this.http.post(`${environment.LOT_API}/users/auth/lot`, {
      loginInfo
    }).pipe(
      catchError((error: any) => throwError(error.message)
    ));
  }

  register(registrationInfo: {
    name: string;
    username: string;
    password: string;
    email: string;
    phoneNumber: string;
    addresses:
      {
        streetAddress: string;
        streetAddress2: string;
        zipCode: string;
        city: string;
        state: string;
        country: string;
      }[]
    ;
  }) {
    console.log(registrationInfo);
    return this.http.post(`${environment.LOT_API}/users/create_account`, {
      registrationInfo
    });
  }
}
