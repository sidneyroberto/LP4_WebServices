import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Router } from "@angular/router";

import { ContatoService } from '../contato/contato.service';

import { Message } from 'primeng/components/common/api';

@Component({
  selector: 'app-contato-cadastro',
  templateUrl: './contato-cadastro.component.html',
  styleUrls: ['./contato-cadastro.component.css']
})
export class ContatoCadastroComponent implements OnInit {

  titulo = 'Contatos';
  tituloPagina = 'Agenda';
  mensagens: Message[] = [];
  erro = '';
  contatos = [];

  constructor(private contatoService: ContatoService, private roteador: Router) { }

  ngOnInit() {
    this.carregar();
  }

  carregar() {
    this.mensagens = [];
    this.contatoService.recuperarTodos()
      .then(
      (contatos) => {
        this.contatos = contatos;
      },
      (erro) => {
        this.mensagens.push({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro ao tentar carregar os contatos' });
      });
  }

  cadastrar(formulario: FormControl) {
    this.mensagens = [];
    this.contatoService.salvar(formulario.value)
      .then(
      () => {
        var nome = formulario.value.nome;
        formulario.reset();
        this.carregar();
        this.mensagens.push({ severity: 'success', summary: 'Sucesso', detail: 'Contato "' + nome + '" cadastrado' });
      },
      (erro) => {
        this.mensagens.push({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro ao tentar cadastrar o contato' });
      }
      );
  }

  remover(formulario: FormControl, contato: any) {
    this.mensagens = [];
    this.contatoService.remover(contato._id)
      .then(
      () => {
        formulario.reset();
        this.carregar();
        this.mensagens.push({ severity: 'success', summary: 'Sucesso', detail: 'Contato "' + contato.nome + '" removido' });
      },
      (erro) => {
        this.mensagens.push({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro ao tentar remover o contato' });
      });
  }

  irParaPaginaDeEdicao(contato) {
    this.roteador.navigate(['/contato', contato._id]);
  }

}
