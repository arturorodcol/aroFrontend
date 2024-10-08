import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  
  @Input() aModal:boolean = false; 
  @Output() cModalEvent = new EventEmitter<void>();

  cModal(){
    this.aModal = false;
    this.cModalEvent.emit();
  }
}
