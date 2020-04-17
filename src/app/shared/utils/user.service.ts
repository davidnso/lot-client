import { Injectable } from '@angular/core';
import { IUser } from '../types';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  fetchUserDetails(){
    const userExists = localStorage.getItem('user');
    if(userExists !== null){
      const user: IUser = JSON.parse(userExists);
      if(!user.profileImgUrl || user.profileImgUrl == null){
        // TODO: Eventually load external resource.
      }
      return user;
    }
  }
}
