import {Component, OnInit} from '@angular/core';
import {User} from "./User";
import {HttpClient} from "@angular/common/http";
import {LoginserviceService} from "./login/loginservice.service";
import {LoginComponent} from "./login/login.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
      user:User = new User();
   // @ts-ignore


    constructor(private loginService: LoginserviceService) {
    }
    title = 'animelist1';
    isLoginFormHidden = true;
    async getUserData(){
      await this.loginService.login(this.user).toPromise().then(value => {
        this.user=value;
      })
        .catch(error=>console.log(error));
    }

  showUser(){
      console.log(this.user);
  }
  ngOnInit(): void {

  }
  public hideLoginForm(){
      this.isLoginFormHidden=true;
  }
  public showLoginForm(){
    this.isLoginFormHidden=false;
  }
}
