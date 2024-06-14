import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { FormularioContatoComponent } from './paginas/formulario-contato/formulario-contato.component';
import { ListaContatosComponent } from './paginas/lista-contatos/lista-contatos.component';
import { ContatoComponent } from './componentes/contato/contato.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormularioContatoComponent,
    ListaContatosComponent,
    RouterOutlet,
    ContatoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
