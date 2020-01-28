import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})

export class CicloDeVidaComponent implements OnInit, OnChanges, 
  DoCheck, AfterContentInit, AfterViewChecked, 
  AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() valorInicial = 10;
  
  constructor() {
    console.log('construtor');
   }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }
}
