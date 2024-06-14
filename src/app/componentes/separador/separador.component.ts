import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoComponent } from '../contato/contato.component';

@Component({
  selector: 'app-separador',
  standalone: true,
  imports: [CommonModule,ContatoComponent],
  templateUrl: './separador.component.html',
  styleUrl: './separador.component.css'
})
export class SeparadorComponent {

}
