import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserInfo } from 'src/types/userInformation';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: UserInfo | null = null
  isShow: boolean = false;
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser()
    this.userService.userInfo$.subscribe((data: UserInfo | null) => this.user = data)
  }

  showEdit() {
    this.isShow = !this.isShow
  }
}
