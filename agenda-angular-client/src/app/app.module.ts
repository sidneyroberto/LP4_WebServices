import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { ContatosComponent } from './contatos/contatos.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableModule } from 'primeng/primeng';

import { HttpClientModule } from '@angular/common/http';
import { ContatoService } from './service/contato.service';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    ContatosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DataTableModule,
    HttpClientModule
  ],
  providers: [
    ContatoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
