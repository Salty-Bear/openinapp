import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide=true;
  title = 'openinapp';
  constructor(){}

  email=""
  password=""
  
  // signInWithGoogle(){
  //   this.auth.googleSignIn()
  // }
}
