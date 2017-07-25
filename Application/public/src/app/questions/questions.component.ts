import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service"
import {User} from "../user";
import { Router, ActivatedRoute } from "@angular/router"
import {MessageService} from "../message.service"
import {Message} from "../message"

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  messages: Message[] = [];
  user: User;
  message: Message = new Message();
  currentId;
  constructor(public _user: UserService, private _route: ActivatedRoute, private _message: MessageService) {
    this.user = _user.currentUser;
    this._route.params.subscribe( (param) => {
      console.log("Task Detail Component load and url id given is: ", param.id);
      this.currentId = param.id; 
      console.log(param.id);   
   })
  }


  ngOnInit() {
    if(this.user) {
      this._user.find(this.currentId).then((data)=> {
        console.log(data, "in callback method of dashboard component")
        this.user = data.user;
      })
    }
    this._message.find()
      .then((data)=> {
        console.log("This is a call back in component dashboard for find--", data);
        this.messages = data.messages;
       
      })
      .catch((err)=> {
        console.log("error retrieving messages", err)
      })
  }

  createMessage(){
    console.log("This is a new message")
    this.message.userId = this.currentId;
    this._message.create(this.message)
      .then((data)=>{
        console.log("This is callback in Component", data);
        this.messages.push(data.message);
        this.message = new Message();
      })
  }

}