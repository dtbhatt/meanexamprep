import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service"
import {User} from "../user";
import { Router, ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: User;
  constructor(public _user: UserService, private _route: ActivatedRoute) {
    this.user = _user.currentUser;
    this._route.params.subscribe(param)=> {
      console.log("Task Detail Component load and url id given is: ", param.id);
      this.currentId = param.id; 
   }   

   }

  ngOnInit() {
    if(this.user) {
      this._user.find(this.currentId).then(data)=> {
        console.log(data, "in callback method of dashboard component")
        this.user = data.user;
      }
    }
  }


}
