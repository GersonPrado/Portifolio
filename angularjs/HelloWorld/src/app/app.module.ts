import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {Basic_Component} from './FactoryComponents/basic_component';
import { BasicComponentCliComponent } from './basic-component-cli/basic-component-cli.component'
import {CursosModule} from './cursos/cursos.module'

@NgModule({
  declarations: [
    AppComponent,
    Basic_Component,
    BasicComponentCliComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
