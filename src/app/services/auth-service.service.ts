import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  trueCode: string = "1234";
  logged: boolean = false;

  constructor() { }

  login(password: string){
    this.logged = (this.trueCode == password);
    return this.logged;
  }

  isLogged(){
    return this.logged;
  }
}
