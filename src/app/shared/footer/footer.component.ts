import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  equipoDesarrollo: string = "Arturo Rodriguez & Carlos Melo";
  date = new Date();
  year = this.date.getFullYear();
}
