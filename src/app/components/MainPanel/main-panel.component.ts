import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({

      selector: 'main-panel',
      templateUrl:'./main-panel.component.html',
      styleUrls:['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit{
       public title:string;
       constructor(){
          this.title="Main-Panel Component"
       }
       ngOnInit(){
         console.log('main-panel.component charged successfuly !!');
       }

}
