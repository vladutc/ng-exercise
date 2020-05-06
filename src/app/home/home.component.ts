import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-e-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public isLoggedIn = false;
  constructor() {}

  ngOnInit() {}

  onLoginChange(loginState): void {
    this.isLoggedIn = loginState;
  }
}
