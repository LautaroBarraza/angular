import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AddTaskComponent } from './add-Task/add-task.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { InputTextComponent } from './input-text/input-text.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ListArchivedTaskComponent } from './list-archived-task/list-archived-task.component'

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AddTaskComponent,
    ListTaskComponent,
    InputTextComponent,
    FooterComponent,
    CreateTaskComponent,
    ListArchivedTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
