import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  getUser(userId): Observable<any> {
    return this.http.get(
      "https://jsonplaceholder.typicode.com/users/" + userId
    );
  }

  getPosts(userId): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/posts?userId=" + userId);
  }
}
