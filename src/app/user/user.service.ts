import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Error } from 'src/types/Error';
import { User } from 'src/types/User';
import { UserInfo } from 'src/types/userInformation';
import { errorHandler } from 'src/utils/errorHandler';
import { ErrorMsgService } from '../core/errorMsg/error-msg.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userInfo$$: any = new BehaviorSubject(null)
  public userInfo$ = this.userInfo$$.asObservable()

  get checkIsLogged(): boolean {
    return !!localStorage.getItem("auth")
  }

  get user(): User {
    const auth = localStorage.getItem("auth") as string
    return JSON.parse(auth);
  }
  constructor(private router: Router, private http: HttpClient, private errorMsgService: ErrorMsgService) { }

  loginHandler(loginForm: NgForm) {

    if (loginForm.invalid) {
      this.errorMsgService.showError(errorHandler(loginForm))
      return 
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
        this.errorMsgService.showError({ field: "Server", message: "Invalid email or password" })

      }
    });
  }

  registerHandler(registerForm: NgForm) {

    if (registerForm.invalid) {
      this.errorMsgService.showError(errorHandler(registerForm))
      return 
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
        this.errorMsgService.showError({ field: "Server", message: "Invalid email or password" })
      }
    });
  }

  logoutHandler() {
    localStorage.clear()
    this.router.navigate(['']);
  }

  getUser() {

    const user: User = this?.user

    this.http.get<UserInfo>(`http://localhost:1337/user/${user?.userId}`).subscribe(data => this.userInfo$$.next(data))
  }

  editPhoto(profileForm: NgForm, showEdit: Function) {
    if (profileForm.invalid) {
      this.errorMsgService.showError(errorHandler(profileForm))
      return
    }

    const user: User = this.user

    const options: object = {
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': user?.token
      }
    };

    this.http.post<object | boolean>(`http://localhost:1337/edit/user`, { profileImg: profileForm.value.profileImg, id: user.userId }, options).subscribe(data => {
      if (data) {
        this.getUser()
        showEdit()
        return
      }
      alert("Error!")
    })

  }
}
