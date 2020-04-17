import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import { throwError, BehaviorSubject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IUser } from '../shared/types';


@Injectable({
  providedIn: "root"
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<IUser>;
  public currentUser: Observable<IUser>;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<IUser>(JSON.parse(localStorage.getItem('user')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
}

  login(loginInfo: { username: string; password: string }) {
    console.log(loginInfo);
    return this.http.post(`${environment.LOT_API}/users/auth/lot`, {
      loginInfo
    }).pipe(
      //catchError((error: any) => throwError(error.message),
      map((res: {user: IUser})=>{
        localStorage.setItem('user', JSON.stringify(res.user))
        this.currentUserSubject.next(res.user);
        return res.user;
      })
    );
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
