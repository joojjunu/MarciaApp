import { Component } from '@angular/core';
import { headerComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [headerComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
