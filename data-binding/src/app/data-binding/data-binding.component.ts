import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  public url = 'http://loiane.com';
  public cursoAngular = true;
  public urlImagem = 'http://lorempixel.com/400/200/';
  public valorAtual = '';
  public valorSalvo = '';
  public isMouseOver = false;

  getValor() {
    return 1;
  }
  constructor() { }

  ngOnInit() {
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicaldo() {
    alert('Botão Clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (evento.target as HTMLInputElement).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

}
