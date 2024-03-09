import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/types/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  get checkIsLogged(): boolean {
    return !!localStorage.getItem("auth")
  }


  constructor(private router: Router, private http: HttpClient) { }

  loginHandler(loginForm: NgForm) {

    if (loginForm.invalid) {
      alert("Ivalid Values")
      return loginForm.reset()
    }


    const options = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    this.http.post<User>("http://localhost:1337/login", loginForm.value, options).subscribe((data) => {
      if (data) {
        localStorage.setItem("auth", JSON.stringify(data))
        this.router.navigate(['']);
      } else {
        alert("Invalid values")
      }
    });
  }

  registerHandler(registerForm: NgForm) {

    if (registerForm.invalid) {
      alert("Ivalid Values")
      return registerForm.reset()
    }

    const options = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    this.http.post<User>("http://localhost:1337/register", registerForm.value, options).subscribe((data) => {

      if (data) {
        localStorage.setItem("auth", JSON.stringify(data))
        this.router.navigate(['']);

      } else {
        alert("Invalid values")
      }
    });
  }

  logoutHandler() {
    localStorage.clear()
    this.router.navigate(['']);
  }

}
