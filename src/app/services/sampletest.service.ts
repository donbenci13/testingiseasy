import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SampletestService {
  BlankUser
  constructor(
    private http : HttpClient
    ) { }

  firstService(){
    return 'Hello'
  }

  login(email,password){
    return false
  }

  returnJsonPlaceHolder(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(["I love unit testing", "Mon 4, 2018"]);
      }, 2000);
    });
  }

}
