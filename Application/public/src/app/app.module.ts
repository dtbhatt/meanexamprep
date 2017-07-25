import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import {UserService} from './user.service';
import { DashboardComponent } from './dashboard/dashboard.component'
import {MessageService} from "./message.service";

import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [
  {path: "", pathMatch: "full", component: LoginComponent},
  {path:"dashbaord/:id", component: DashboardComponent},
  {path:"question/:id", component: QuestionsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
