import { Component } from '@angular/core';

@Component({
  selector: 'app-formulariotarea',
  templateUrl: './formulariotarea.component.html',
  styleUrls: ['./formulariotarea.component.css']
})
export class FormulariotareaComponent {
  titulo='';
  descripcion='';

  tareas: any[] = [];

  agregartarea() {
    const nuevatarea = {
      titulo: this.titulo,
      descripcion: this.descripcion
    };
    this.tareas.push(nuevatarea)

    this.titulo = '';
    this.descripcion = '';
  }

}
