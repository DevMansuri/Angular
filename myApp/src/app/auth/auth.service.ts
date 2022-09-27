import { Injectable } from '@angular/core';
import { getAuth } from 'firebase/auth';
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from 'firebase/auth';
import { LoginForm, RegisterForm } from '../interface/Auth';
import { signOut } from "firebase/auth";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated :boolean = false;
  guard = localStorage.setItem("isAuthenticated","true");

  constructor(private router :Router) { }

  login(form :LoginForm) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth,form.email,form.password)
     .then((userCredential) => {
      const user = userCredential.user;
      this.isAuthenticated = true;
      localStorage.setItem("isAuthenticated","true");
      alert("yehh login success😎😎")
      this.router.navigate(['home']);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      this.isAuthenticated = false;
      alert("login not success😒😒")
    });
  }

  register(form : RegisterForm) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth,form.email,form.password)
      .then((userCredential) => {
      const user = userCredential.user;
      this.isAuthenticated = true;
      alert("Registration Successfull😊")
      this.router.navigate(['login']);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      this.isAuthenticated = false;
      alert("Registration not Success🤣")
    });

  }
  logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      alert("logout success")
      this.isAuthenticated = false;
      localStorage.setItem("isAuthenticated","false");
      this.router.navigate(['login'])
    }).catch((error) => {
      alert("logout not  success")
    });


  }
}