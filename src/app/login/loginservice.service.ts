import { Injectable } from '@angular/core';
import {User} from "../User";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";

import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  httpClient:HttpClient;
  constructor(httpClient:HttpClient) {
    this.httpClient = httpClient;
  }

  public  login(user:User):Observable<any>{
     return  this.httpClient.post<User>('http://localhost:8080/login',user);

  }
}
