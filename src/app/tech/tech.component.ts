import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-tech",
  templateUrl: "./tech.component.html",
  styleUrls: ["./tech.component.scss"]
})
export class TechComponent implements OnInit {
  screenTitle: string = "Home";

  constructor(private router: Router) {};

  ngOnInit() {

    switch (this.router.url) {
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
    };
  };

  changeTitle(title) {
    this.screenTitle = title;
  };
};
