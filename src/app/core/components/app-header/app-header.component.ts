import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { User } from "../../models/user.model";

@Component({
  selector: "ng-e-app-header",
  templateUrl: "./app-header.component.html",
  styleUrls: ["./app-header.component.scss"],
})
export class AppHeaderComponent implements OnInit {
  @Input() isLoggedIn: boolean;
  @Output() logInChange: EventEmitter<boolean> = new EventEmitter(false);
  user: User = {
    firstName: "Ahsan",
    lastName: "Ayaz",
  };
  constructor() {}

  ngOnInit() {}

  login() {
    this.logInChange.emit(true);
  }

  signup() {
    this.logInChange.emit(true);
  }

  logout() {
    this.logInChange.emit(false);
  }
}
