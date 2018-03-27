import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Contato } from '../contatos/Contato';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContatoService {

  private urlServidor = 'http://localhost:3000/contatos';

  constructor(private http: HttpClient) { }

  recuperarTodos(): Promise<Contato[]> {
    return this.http
      .get(this.urlServidor)
      .toPromise()
      .then(resposta => Promise.resolve(resposta))
      .catch(this.lidaComErro);
  }

  private lidaComErro(erro: any): Promise<any> {
    console.error('Ocorreu um erro', erro);
    return Promise.reject(erro.message || erro);
  }
}
