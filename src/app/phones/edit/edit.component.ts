import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PhoneService } from '../phone.service';
import { ActivatedRoute } from '@angular/router';
import { Form, NgForm } from '@angular/forms';
import { Phone } from 'src/types/Phone';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  constructor(public phoneService: PhoneService, private activeRoutes: ActivatedRoute) { }
  phoneInfo: Phone | undefined
  phoneId: string = this.activeRoutes.snapshot.params["offerId"];
  ngOnInit(): void {
    this.phoneService.data = null
    this.phoneService.getPhone(this.phoneId).subscribe(data => {
      this.phoneInfo = data
    })
  }

}
