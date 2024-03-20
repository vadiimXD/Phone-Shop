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
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userService.getUser().subscribe(data => {
      this.user = data
      console.log(data)
    })
  }
}
