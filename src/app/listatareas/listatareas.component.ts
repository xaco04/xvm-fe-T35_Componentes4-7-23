import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listatareas',
  templateUrl: './listatareas.component.html',
  styleUrls: ['./listatareas.component.css']
})
export class ListatareasComponent {
  @Input() data:any;

  tareacompletada(index: number) {
    this.data[index].completed = true; // Cambia el estado de completado de la tarea
  }

  eliminarFila(index: number) {
    this.data.splice(index, 1);
  }

}
