import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { ContatoService } from './contato/contato.service';

import { ContatoCadastroComponent } from './contato-cadastro/contato-cadastro.component';
import { ContatoEdicaoComponent } from './contato-edicao/contato-edicao.component';

import {
  ButtonModule,
  InputTextModule,
  InputMaskModule,
  DataTableModule,
  MessagesModule
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
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    DataTableModule,
    MessagesModule,
    HttpClientModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [
    ContatoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
