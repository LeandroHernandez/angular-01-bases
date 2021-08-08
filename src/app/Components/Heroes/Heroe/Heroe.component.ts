import { Component } from '@angular/core';

@Component({
  selector: 'App-Heroe',
  templateUrl: './Heroe.component.html',
})
export class HeroeComponent {
  public nombre: string = 'Ironman';
  public edad: number = 45;

  public get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return ` ${this.nombre} - ${this.edad} `;
  }

  cambiarHeroe(): string {
    return (this.nombre = 'Spiderman');
  }

  cambiarEdad(): number {
    return (this.edad = 30);
  }
}
