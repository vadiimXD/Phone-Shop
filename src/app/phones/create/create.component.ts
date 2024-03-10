import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(public phoneService: PhoneService) { }

  ngOnInit(): void {
    this.phoneService.data = null
  }
}
