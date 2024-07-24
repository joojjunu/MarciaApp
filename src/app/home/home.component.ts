import { Component } from '@angular/core';
import { headerComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [headerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
