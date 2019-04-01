import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SampletestService } from '../sampletest.service';

@Injectable()
export class SampletestServiceMock extends SampletestService  {

  constructor(
     http : HttpClient
    ) { 
      super(http);
    }

  firstService(){
    return 'Hello'
  }
  
  login(email,password){
    return true
  }

  // returnJsonPlaceHolder(){
  //   return [1,2,3,4,5,6,7,8,9,10]
  // }

}
