import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrected typo here
})
export class LoginComponent {

  name: string = "";
  password: string = "";
  users = [
    { name: "Yoda", password: "yoda413" },
    { name: "Buster", password: "buster816" },
    { name: "Porthus", password: "porthus1234" }
  ];
  
  constructor(private router: Router) {} // Corrected import

  itemClicked() {
    // Logic for handling item clicks can be added here.
  }
}
