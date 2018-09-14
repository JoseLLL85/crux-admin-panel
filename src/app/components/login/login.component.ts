import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { MsalService } from '../../services/msal.service';

declare var msal:any;

@Component({

      selector: 'login',
      templateUrl:'./login.component.html',
      styleUrls:['./login.component.css']
})
export class LoginComponent implements OnInit{
       public title:string;
       constructor(
         private location: Location,
          private msalService: MsalService
       ){
          this.title="Loguin Component"
       }
       ngOnInit(){
         console.log('login.component charged successfuly !!');
       }

       login():void{
       this.msalService.login();
      };

        logout():void{
        this.msalService.logout();
        sessionStorage.clear();
      };

      isActive(viewLocation: any): boolean {
      return viewLocation === this.location.path();
      };

      isOnline(): boolean {
     return this.msalService.isOnline();
      };

}
