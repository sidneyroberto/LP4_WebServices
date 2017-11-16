import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
=======
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 93d050c31b4a08d003eaead6ed2e12b874740a5e

import { AppComponent } from './app.component';

import { ContatoService } from './contato/contato.service';

import { ContatoCadastroComponent } from './contato-cadastro/contato-cadastro.component';
import { ContatoEdicaoComponent } from './contato-edicao/contato-edicao.component';

import { ContatoService } from './service/contato.service';

import {
  ButtonModule,
  InputTextModule,
  InputMaskModule,
<<<<<<< HEAD
  DataTableModule,
  MessagesModule
=======
  ButtonModule,
  DataTableModule,
  ConfirmDialogModule,
  ConfirmationService
>>>>>>> 93d050c31b4a08d003eaead6ed2e12b874740a5e
} from 'primeng/primeng';


const rotas: Routes = [
  { path: 'contato', component: ContatoCadastroComponent },
  { path: 'contato/:id', component: ContatoEdicaoComponent },
  { path: '', redirectTo: '/contato', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    ContatoCadastroComponent,
    ContatoEdicaoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
<<<<<<< HEAD
    DataTableModule,
    MessagesModule,
    HttpClientModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [
    ContatoService
=======
    ButtonModule,
    DataTableModule,
    HttpClientModule,
    ConfirmDialogModule
  ],
  providers: [
    ContatoService,
    ConfirmationService
>>>>>>> 93d050c31b4a08d003eaead6ed2e12b874740a5e
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
