import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoComponent } from '../contato/contato.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule,ContatoComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

}
