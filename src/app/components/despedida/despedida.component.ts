import { Component } from '@angular/core';

@Component({
  selector: 'app-despedida',
  templateUrl: './despedida.component.html',
  styleUrls: ['./despedida.component.css']
})
export class DespedidaComponent {
  data= [
  {
    title: 'Despedida 1',
    content: 'despedida works!',
    button: 'Primary',
  },
  {
    title: 'Despedida 2',
    content: 'despedida works!',
    button: 'Primary',
  },
  {
    title: 'Despedida 3',
    content: 'despedida works!',
    button: 'Primary',
  },
  
  ];
}
