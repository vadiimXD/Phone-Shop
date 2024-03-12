import { Component, OnInit } from '@angular/core';
import { LoadsService } from '../../core/loader/loads.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public loaderService: LoadsService, private userService:UserService) { }

  ngOnInit(): void {
 
  }
  get isLogged(): boolean {
    return this.userService.checkIsLogged
  }

}
