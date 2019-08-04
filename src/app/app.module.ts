import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'', redirectTo:'todos', pathMatch:'full'},
      {path:'todos', component:TodosComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
