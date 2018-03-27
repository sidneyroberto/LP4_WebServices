import { Component, OnInit } from '@angular/core';
import { Contato } from './Contato';
import { ContatoService } from '../service/contato.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})

export class ContatosComponent implements OnInit {

  contatos: Array<Contato>;

  constructor(private service: ContatoService) {
    this.contatos = new Array<Contato>();
  }

  ngOnInit() {
    this.carregar();
  }

  carregar() {
    this.service.recuperarTodos()
      .then(
        (contatos) => this.contatos = contatos,
        (erro) => console.log(erro)
      );
  }

}
