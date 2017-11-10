import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ContatoService } from './service/contato.service';

import {
  InputTextModule,
  InputMaskModule,
  ButtonModule,
  DataTableModule,
  ConfirmDialogModule,
  ConfirmationService
} from 'primeng/primeng';
import { ContatoCadastroComponent } from './contato-cadastro/contato-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContatoCadastroComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    InputMaskModule,
    ButtonModule,
    DataTableModule,
    HttpClientModule,
    ConfirmDialogModule
  ],
  providers: [
    ContatoService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
