import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
<<<<<<< HEAD

import { Router } from "@angular/router";

import { ContatoService } from '../contato/contato.service';

import { Message } from 'primeng/components/common/api';
=======
import { ContatoService } from '../service/contato.service';
import { ConfirmationService } from 'primeng/primeng';

>>>>>>> 93d050c31b4a08d003eaead6ed2e12b874740a5e

@Component({
  selector: 'app-contato-cadastro',
  templateUrl: './contato-cadastro.component.html',
  styleUrls: ['./contato-cadastro.component.css']
})
export class ContatoCadastroComponent implements OnInit {

  titulo = 'Contatos';
<<<<<<< HEAD
  tituloPagina = 'Agenda';
  mensagens: Message[] = [];
  erro = '';
  contatos = [];

  constructor(private contatoService: ContatoService, private roteador: Router) { }
=======
  contatos = [];

  constructor(
    private service: ContatoService,
    private confirmationService: ConfirmationService  
  ) { }
>>>>>>> 93d050c31b4a08d003eaead6ed2e12b874740a5e

  ngOnInit() {
    this.carregar();
  }

<<<<<<< HEAD
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
=======
  cadastrar(formulario: FormControl){
    this.service.cadastrar(formulario.value).subscribe(() => {
      formulario.reset();
      this.carregar();
    });
>>>>>>> 93d050c31b4a08d003eaead6ed2e12b874740a5e
  }

  carregar(){
    this.service.listar().subscribe((dados) => {
      this.contatos = dados;
    })
  }

  remover(contato) {
    this.confirmationService.confirm({
      message: 'Deseja realmente remover o contato "' + contato.nome + '"?',
      header: 'Confirmação',
      icon: 'fa fa-trash',
      accept: () => {
        this.service.remover(contato._id).subscribe(() => {
          this.carregar();
        });
      },
      reject: () => { }
    });
  }
}
