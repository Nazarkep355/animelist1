import {Component, OnInit} from '@angular/core';
import {LoginserviceService} from "./loginservice.service";
import {User} from "../User";

import {observable, Observable} from "rxjs";
import {waitForAsync} from "@angular/core/testing";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   user: User = new User();
  constructor(private loginService: LoginserviceService,private app: AppComponent) {
  }
  public showForm(){
    this.app.showLoginForm();
  }
  public hideForm(){
    this.app.hideLoginForm();
  }
  ngOnInit(): void {
  }
  public getUserData():User{
    return this.user;
  }
  public async login() {
    //@ts-ignore
    document.getElementById('wrongLogin').style.visibility = 'hidden';



    // @ts-ignore
    await this.loginService.login(this.user).toPromise().then(value => {
      this.user=value;
    })
      .catch(error=>console.log(error));
    this.app.user = this.user;
    console.log('after:')
    console.log(this.user)
    if (this.user.id == 0 || this.user.id == null) {
      //@ts-ignore
      document.getElementById('wrongLogin').style.visibility = 'visible';
    }
  }

}
