import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

import { ProdutoService } from '../produto/produto.service';

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css']
})
export class ProdutoCadastroComponent implements OnInit {

  ptLocale = {
    closeText: 'Fechar',
    prevText: 'Anterior',
    nextText: 'Próximo',
    currentText: 'Começo',
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
    weekHeader: 'Semana',
    firstDay: 0,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: '',
    timeOnlyTitle: 'Só Horas',
    timeText: 'Tempo',
    hourText: 'Hora',
    minuteText: 'Minuto',
    secondText: 'Segundo',
    ampm: false,
    month: 'Mês',
    week: 'Semana',
    day: 'Dia',
    allDayText: 'Todo o Dia'
  };

  produtos = [];

  titulo = 'Produtos';

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.produtoService.listar().subscribe((dados) => {
      this.produtos = dados;
    });
  }

  cadastrar(formulario: FormControl) {
    this.produtoService.cadastrar(formulario.value).subscribe(() => {
      formulario.reset();
      this.consultar();
    });
  }

  remover(formulario, produto) {
    this.produtoService.remover(produto._id).subscribe(() => {
      formulario.reset();
      this.consultar();
    });
  }

}
