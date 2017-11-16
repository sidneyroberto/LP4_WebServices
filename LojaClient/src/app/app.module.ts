import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { CurrencyMaskModule } from "ng2-currency-mask";

import { ProdutoService } from './produto/produto.service';

import {
  DataTableModule,
  InputTextModule,
  SpinnerModule,
  CalendarModule,
  ConfirmDialogModule,
  ConfirmationService
} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProdutoCadastroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CurrencyMaskModule,
    DataTableModule,
    InputTextModule,
    SpinnerModule,
    CalendarModule,
    ConfirmDialogModule
  ],
  providers: [
    ProdutoService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
