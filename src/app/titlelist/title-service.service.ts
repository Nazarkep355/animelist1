import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Title} from "../Title";
import * as http from "http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TitleServiceService {

  constructor(private http:HttpClient ) {}
  findByName(name:string):Observable<Title[]>{
    return this.http.get<Title[]>('http://localhost:8080/title?name='+name);
  }
  ratingPage():Observable<Title[]>{
    return this.http.get<Title[]>('http://localhost:8080/rating');
  }
  changeOption(field:string){
    return this.http.get<Title[]>('http://localhost:8080/title?name='+field+'&size=3')
  }
}
