import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  private numberOfUsers = 12;
  private restURL = "https://reqres.in/api/users";
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(`${this.restURL}?per_page=${this.numberOfUsers}`);
  }

  getUserById(userId): Observable<any> {
    return this.http.get(`${this.restURL}/${userId}`);
  }
}
