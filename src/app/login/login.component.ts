import { Component } from '@angular/core';
import { FormsModule } from '@angular/core';
import { Router } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor (private router:Router){}

  name:string = "";
  password:string = "";
  
  itemClicked(){};
}
