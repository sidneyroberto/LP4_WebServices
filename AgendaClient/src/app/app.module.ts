import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import {
  InputTextModule,
  InputMaskModule
} from 'primeng/primeng';
import { ContatoCadastroComponent } from './contato-cadastro/contato-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContatoCadastroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    InputMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
