import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "app-tech",
  templateUrl: "./tech.component.html",
  styleUrls: ["./tech.component.scss"]
})
export class TechComponent implements OnInit {
  screenTitle = "Home";

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    console.log(this.router.url)

    switch(this.router.url) {
      case "/":
        this.changeTitle("Home");
        break;
      case "/home":
        this.changeTitle("Home");
        break;
      case "/posts":
        this.changeTitle("Postagens");
        break;
      case "/albuns":
        this.changeTitle("Albuns");
        break;
      case "/todos":
        this.changeTitle("To-dos");
        break;
      default:
        this.changeTitle("Albuns");
        break;
      
    }
  }

  changeTitle(title) {
    this.screenTitle = title;
    console.log(this.router.url)
  }
}
