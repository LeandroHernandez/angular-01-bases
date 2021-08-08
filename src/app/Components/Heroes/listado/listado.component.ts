import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  public listado: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  public borrado: string = '';

  constructor() {}

  ngOnInit(): void {}

  public borrarHeroe(): void {
    this.borrado = this.listado.shift() || '';
  }
}
