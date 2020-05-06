import { Component, OnInit } from "@angular/core";
import { UsersService } from "../../services/users.service";
import { Router } from '@angular/router';

@Component({
  selector: "ng-e-app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.scss"],
})
export class UserDetailComponent implements OnInit {
  public user: any;
  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.setUser();
  }

  setUser(): void {
    const userId = this.router.url.split('/')[2];
    this.usersService
      .getUserById(userId)
      .subscribe(({data}) => (this.user = data));
  }
}
