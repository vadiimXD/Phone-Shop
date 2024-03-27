import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, NgForm, } from '@angular/forms';
import { errorHandler } from '../../utils/errorHandler'
import { Error } from 'src/types/Error';
import { User } from 'src/types/User';
import { Phone } from 'src/types/Phone';
import { ActivatedRoute, Router } from '@angular/router';
import { authUser } from 'src/types/authUser';
import { BehaviorSubject, tap } from 'rxjs';
import { UserService } from '../user/user.service';
import { ErrorMsgService } from '../core/errorMsg/error-msg.service';
import { ToastService } from '../shared/toast/toast.service';

@Injectable({
  providedIn: 'root'
})

export class PhoneService {
  constructor(private http: HttpClient, private router: Router, private userService: UserService, private errorMsgService: ErrorMsgService,private toastService:ToastService) {

  }

  private phones$$: any = new BehaviorSubject(null)
  public phones$ = this.phones$$.asObservable()

  get user(): User {
    const auth = localStorage.getItem("auth") as string
    return JSON.parse(auth);
  }

  createHandler(createForm: NgForm) {

    if (createForm.invalid) {
      this.errorMsgService.showError(errorHandler(createForm))
      return
    }

    let options: any = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const userString: string | null = localStorage.getItem("auth")
    const auth: User | null = userString && JSON.parse(userString)

    if (auth) {
      options.headers["X-Authorization"] = auth.token
    }

    createForm.value.owner = auth?.userId

    this.http.post<Phone>("http://localhost:1337/create", createForm.value, options).subscribe((data) => {
      if (data) {
        this.router.navigate(['catalog']);
      } else {
        this.errorMsgService.showError({ field: "Server", message: "An error occurred during the request! Try again!" })
      }
    });

  }

  getAllPhones() {
    //ToDo OPTIMIZATION!!!!!
    const catalogPhones = this.http.get<Phone[]>("http://localhost:1337/catalog")
    catalogPhones.subscribe(data => this.phones$$.next(data))
  }

  getPhone(phoneId: string) {
    return this.http.get<Phone>(`http://localhost:1337/details/${phoneId}`)
  }

  buyPhone(user: authUser, phoneId: string | undefined) {

    let options: any = {
      headers: {
        'Content-Type': 'application/json',
        "X-Authorization": user.token
      }
    };

    this.http.post("http://localhost:1337/buy", { userId: user.userId, phoneId }, options).subscribe((data) => {
      if (data) {
        this.router.navigate(['catalog']);
      } else {
        this.errorMsgService.showError({ field: "Server", message: "An error occurred during the request! Try again!" })
      }
    })
  }

  editPhone(editForm: NgForm, phoneId: string) {

    if (editForm.invalid) {
      this.errorMsgService.showError(errorHandler(editForm))
      return
    }




    const auth: User = this.user

    let options: any = {
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': auth?.token
      }
    };

    this.http.post<Phone>(`http://localhost:1337/edit`, { body: editForm.value, id: phoneId }, options).subscribe((data) => {
      if (data) {
        this.router.navigate([`/details/${phoneId}`])
        this.toastService.showToast("Successfully edited!")
      } else {
     this.errorMsgService.showError({ field: "Server", message: "An error occurred during the request! Try again!" })
      }

    });
  }

  deletePhone(phoneId: string | undefined) {


    const auth: User = this.user

    let options: any = {
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': auth?.token
      }
    };

    this.http.delete(`http://localhost:1337/delete/${phoneId}`, options).subscribe(data => {
      if (data) {
        alert("successfully deleted")
        return this.router.navigate(["/catalog"])
      }

      return this.errorMsgService.showError({ field: "Server", message: "An error occurred during the request! Try again!" })

    })
  }

  searchPhones(searchForm: NgForm) {
    if (searchForm.invalid) {
      this.errorMsgService.showError(errorHandler(searchForm))
      return
    }

    let options: any = {
      headers: {
        'Content-Type': 'application/json',
      }
    };

    const searchPhones = this.http.post<Phone[] | undefined>(`http://localhost:1337/search`, searchForm.value, options)

    searchPhones.subscribe(data => this.phones$$.next(data))
  }

  addToCart(id: string | undefined) {

    const auth: User = this.user

    let options: object = {
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': auth?.token
      }
    };
    this.http.post<object>(`http://localhost:1337/add/cart`, { phoneId: id, userId: auth.userId }, options).subscribe(data => {
      if (data) {
        this.getAllPhones()
        return
      }
      this.errorMsgService.showError({ field: "Server", message: "An error occurred during the request! Try again!" })
    })
  }

  removeFromCart(id: string | undefined) {


    const auth: User = this.user

    let options: object = {
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': auth?.token
      }
    };

    this.http.post<object>(`http://localhost:1337/remove/cart`, { phoneId: id, userId: auth.userId }, options).subscribe(data => {
      if (data) {
        this.getAllPhones()
        this.userService.getUser()
        return
      }
      this.errorMsgService.showError({ field: "Server", message: "An error occurred during the request! Try again!" })

    })
  }
}
