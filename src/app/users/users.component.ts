import { DataService } from "../data.service";
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Observable } from "rxjs";
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger
} from "@angular/animations";
import { UserModel } from "../model/user-model";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  users$: Array<UserModel>;
  searchedName: string;
  sortOptions: String[] = ['Name','Username','Email'];
  selectedSortOption: String = 'Name';
  constructor(private data: DataService) {}

  ngOnInit() {
    if(!this.users$) {
      this.data.getUsers().subscribe(data => {
        if(data) {
          this.users$ = data;
        }
        sessionStorage.setItem('users', JSON.stringify(data));
        this.sort();
      });
      
    } else {
      this.users$ = JSON.parse(sessionStorage.getItem('users'));
      this.sort();
    }
  }

  searchContent() {
    this.users$ = JSON.parse(sessionStorage.getItem('users'));
    if(this.searchedName) {
      this.users$ = this.users$.filter(e => e.name.toLowerCase().includes(this.searchedName.toLowerCase()));
    }
    this.sort();
  }

  sort() {
    const key = this.selectedSortOption.toLowerCase();
    this.users$.sort((a, b) => (a[key] > b[key]) ? 1 : -1);
  }
}
