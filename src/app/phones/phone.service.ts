import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Injectable } from '@angular/core';
import { NgForm, ValidationErrors } from '@angular/forms';
import { errorHandler } from '../../utils/errorHandler'
import { Error } from 'src/types/Error';
import { User } from 'src/types/User';
import { Phone } from 'src/types/Phone';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  data: Error | null = null
  phones: Phone[] | undefined;
  constructor(private http: HttpClient, private router: Router) {

  }


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
    return this.http.get<Phone[]>("http://localhost:1337/catalog")
  }
}
