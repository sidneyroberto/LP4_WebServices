import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { ContatoService } from '../service/contato.service';
import { Contato } from '../contato/contato';

import { Message } from 'primeng/components/common/api';

@Component({
  selector: 'app-contato-edicao',
  templateUrl: './contato-edicao.component.html',
  styleUrls: ['./contato-edicao.component.css']
})
export class ContatoEdicaoComponent implements OnInit {

  titulo = 'Editar contato';
  contato = new Contato();
  mensagens: Message[] = [];

  constructor(private location: Location, private rota: ActivatedRoute, private roteador: Router, private contatoService: ContatoService) { }

  ngOnInit() {
    this.rota.paramMap
      .switchMap((params: ParamMap) =>
        this.contatoService.recuperar(params.get('id'))).subscribe((contato) => {
          this.contato = contato;
        });
  }

  editar(formulario: FormControl) {
    this.mensagens = [];
    this.contatoService.atualizar(this.contato)
      .then(
      (contato) => {
        formulario.reset();
        this.mensagens.push({ severity: 'success', summary: 'Sucesso', detail: 'Contato "' + contato.nome + '" editado' });
      },
      (erro) => {
        this.mensagens.push({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro ao tentar editar o contato' });
      });
  }

  voltar() {
    this.location.back();
  }

}
