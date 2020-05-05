import { Component, OnInit } from "@angular/core";
import { UsersService } from "../../services/users.service";

@Component({
  selector: "ng-e-app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"],
})
export class UsersListComponent implements OnInit {
  public users = [];
  public userMoji = ['👶', '🧒', '👧', '🧑', '👱', '👨', '🧔', '👨‍🦰', '👨‍🦱', '👨‍🦳', '👨‍🦲', '🧔', '👩'];
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.setUsers();
  }

  setUsers(): void {
    this.usersService.getUsers().subscribe(({ data }) => (this.users = data));
  }
}
