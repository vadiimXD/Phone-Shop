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

@Injectable({
  providedIn: 'root'
})

export class PhoneService {
  data: Error | null = null
  phones: Phone[] | undefined;
  constructor(private http: HttpClient, private router: Router, private activeRoutes: ActivatedRoute) {

  }


  private phones$$: any = new BehaviorSubject(null)
  public phones$ = this.phones$$.asObservable()

  createHandler(createForm: NgForm) {

    if (createForm.invalid) {
      this.data = errorHandler(createForm)
      return
    }

    this.data = null

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
        this.data = { field: "Server", message: "Server Error!" }
      }
    });

  }

  getAllPhones() {
    const test = this.http.get<Phone[]>("http://localhost:1337/catalog")
    test.subscribe(data => this.phones$$.next(data))

    return this.http.get<Phone[]>("http://localhost:1337/catalog")
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
        alert("Error")
        //ToDo
      }
    })
  }

  editPhone(editForm: NgForm, phoneId: string) {

    if (editForm.invalid) {
      this.data = errorHandler(editForm)
      return
    }

    this.data = null

    const userString: string | null = localStorage.getItem("auth")
    const auth: User | null = userString && JSON.parse(userString)

    let options: any = {
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': auth?.token
      }
    };

    this.http.post<Phone>(`http://localhost:1337/edit`, { body: editForm.value, id: phoneId }, options).subscribe((data) => {
      if (data) {
        this.router.navigate([`/details/${phoneId}`])
      } else {
        this.data = { field: "Server", message: "Server Error!" }
      }

    });
  }

  deletePhone(phoneId: string | undefined) {

    const userString: string | null = localStorage.getItem("auth")
    const auth: User | null = userString && JSON.parse(userString)

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

      return alert("Error!")

    })
  }



  searchPhones(searchForm: NgForm) {
    if (searchForm.invalid) {
      this.data = errorHandler(searchForm)
      return
    }

    let options: any = {
      headers: {
        'Content-Type': 'application/json',
      }
    };

    const phones = this.http.post<Phone[] | undefined>(`http://localhost:1337/search`, searchForm.value, options)

    phones.subscribe(data => this.phones$$.next(data))
  }
}
