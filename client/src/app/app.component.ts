import { Component } from '@angular/core';
import {LumenService} from './services/lumen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [LumenService]
})
export class AppComponent {
  title = 'app works!';
  username:string;
  user:any;

  constructor(private _lumenService:LumenService){
    console.log("Run this constructor");
    this.onLoad();
  }

  onLoad(){
    this._lumenService.getUser().subscribe(user=>{this.user = user});
    
  }

}
