import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Receta } from '../../interfaces/recetas';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-delete-update-output',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './delete-update-output.component.html',
  styleUrl: './delete-update-output.component.css'
})
export class DeleteUpdateOutputComponent {
  @Input() receta!:Receta;
  @Output() delete = new EventEmitter<number>();
  @Output() update = new EventEmitter<number>();
  @Output() details = new EventEmitter<number>();

  onUpdate(){
    this.update.emit(this.receta.id);
  }
  onDelete(){
    this.delete.emit(this.receta.id);
  }
  verDetalle(){
    this.details.emit(this.receta.id);

  }

}
