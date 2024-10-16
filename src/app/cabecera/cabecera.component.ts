import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'cabecera',
  standalone: true,
  imports: [],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {

  @ViewChild('imagenCabecera') imagenCabecera!: ElementRef<HTMLImageElement>;

  ngAfterViewInit() {

    this.imagenCabecera.nativeElement.src = 'https://www.coastkeeper.org/wp-content/uploads/2022/09/Logo-Placeholder-TTC.png';

  }

}
