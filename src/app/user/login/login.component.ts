import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { LoadsService } from 'src/app/core/loader/loads.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public userService: UserService, private loadService: LoadsService) { }

  ngOnInit(): void {
    // this.loadService.toggleLoader()
  }
}
