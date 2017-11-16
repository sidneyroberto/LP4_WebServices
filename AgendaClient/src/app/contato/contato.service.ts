import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Contato } from './contato';

import { Observable } from "rxjs";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContatoService {

  urlServicos = 'http://localhost:3000/contatos';

  constructor(private http: HttpClient) { }

  recuperarTodos(): Promise<Contato[]> {
    return this.http.get(this.urlServicos)
      .toPromise()
      .then(resposta => Promise.resolve(resposta))
      .catch(this.lidaComErro);
  }

  recuperar(id: any): Promise<Contato> {
    return this.http.get(this.urlServicos + '/' + id)
      .toPromise()
      .then(resposta => Promise.resolve(resposta))
      .catch(this.lidaComErro);
  }

  salvar(contato: Contato): Promise<Contato> {
    return this.http.post(this.urlServicos, contato)
      .toPromise()
      .then(resposta => Promise.resolve(resposta))
      .catch(this.lidaComErro);
  }

  atualizar(contato: Contato): Promise<Contato> {
    return this.http.put(this.urlServicos, contato)
      .toPromise()
      .then(resposta => Promise.resolve(resposta))
      .catch(this.lidaComErro);
  }

  remover(id: number): Promise<void> {
    return this.http.delete(this.urlServicos + '/' + id)
      .toPromise()
      .then(() => null)
      .catch(this.lidaComErro);
  }

  private lidaComErro(erro: any): Promise<any> {
    console.error('Ocorreu um erro', erro);
    return Promise.reject(erro.message || erro);
  }

}
