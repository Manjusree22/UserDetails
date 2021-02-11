import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Observable } from "rxjs";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
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
import { PostModel } from "../model/post-model";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  user$: UserModel;
  currentUrl: string;
  userId: string;
  posts$: Array<PostModel>;

  constructor(private route: ActivatedRoute, private data: DataService, private router: Router) {
    this.route.params.subscribe(params => (this.userId = params.id));
    router.events.subscribe(
      (_: NavigationEnd) => (this.currentUrl = this.router.url)
    );
  }

  ngOnInit() {
    this.data.getUser(this.userId).subscribe((data: UserModel) => (this.user$ = data));
    this.data.getPosts(this.userId).subscribe((data: PostModel[]) => (this.posts$ = data));
  }
}
