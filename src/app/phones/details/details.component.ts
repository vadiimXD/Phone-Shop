import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhoneService } from '../phone.service';
import { Phone } from 'src/types/Phone';
import { Observable } from 'rxjs';
import { User } from 'src/types/User';
import { authUser } from 'src/types/authUser';
import { LoadsService } from 'src/app/core/loader/loads.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  phone: Phone | undefined;
  currentUser: authUser | undefined = undefined
  isOwner: boolean = false

  constructor(private activatedRoute: ActivatedRoute, public phoneService: PhoneService, private loaderService: LoadsService) { }

  ngOnInit(): void {
    const phone$: Observable<Phone> = this.phoneService.getPhone(this.activatedRoute.snapshot.params["offerId"]);
    phone$.subscribe(data => {
      this.phone = data
      const auth: any = localStorage.getItem("auth")

      if (!auth) {
        this.isOwner = false
      }
      this.currentUser = JSON.parse(auth)

      if (this.phone.owner._id == this.currentUser?.userId) this.isOwner = true

    })
  }



}