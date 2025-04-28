import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './model/User';
import { UserService } from './service/user.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'social-exp';
  public users: User[] | undefined;

  constructor(private userService: UserService, config: NgbCarouselConfig){ 
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    // this.getUsers();
  }

  public getUsers(): void {
    this.userService.getUsers().subscribe(

      (respose: User[]) => {
        this.users = respose;
      },

      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
