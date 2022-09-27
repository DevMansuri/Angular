import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/interface/Auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form :LoginForm = {
    email :'',
    password:''
  }

  constructor(private auhtService : AuthService) { }

  ngOnInit(): void {
  }
  login() {
    this.auhtService.login(this.form);
  }

}
