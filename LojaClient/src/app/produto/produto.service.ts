import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProdutoService {

  urlServicos = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(this.urlServicos);
  }

  cadastrar(produto: any) {
    return this.http.post(this.urlServicos, produto);
  }

  remover(id: any) {
    return this.http.delete(this.urlServicos + '/' + id);
  }
}
