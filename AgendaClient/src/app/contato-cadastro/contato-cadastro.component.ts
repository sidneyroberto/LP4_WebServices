import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ContatoService } from '../service/contato.service';
import { ConfirmationService } from 'primeng/primeng';


@Component({
  selector: 'app-contato-cadastro',
  templateUrl: './contato-cadastro.component.html',
  styleUrls: ['./contato-cadastro.component.css']
})
export class ContatoCadastroComponent implements OnInit {

  titulo = 'Contatos';
  contatos = [];

  constructor(
    private service: ContatoService,
    private confirmationService: ConfirmationService  
  ) { }

  ngOnInit() {
    this.carregar();
  }

  cadastrar(formulario: FormControl){
    this.service.cadastrar(formulario.value).subscribe(() => {
      formulario.reset();
      this.carregar();
    });
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
