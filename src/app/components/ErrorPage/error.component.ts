import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
        selector:'error',
        templateUrl:'./error.component.html',
        styleUrls:['./error.component.css']
})
export class ErrorComponent implements OnInit{

     public code:number;
     constructor(){
       this.code=404;
     }
     ngOnInit(){
       console.log('error.component charged successfully');
     }
}
