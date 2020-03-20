import { Component } from "@angular/core";
let TechComponent = class TechComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.screenTitle = "Home";
    }
    ngOnInit() {
        console.log(this.router.url);
        switch (this.router.url) {
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
    //   this.route.params.subscribe(params => {
    //     const param = params["id"];
    //     console.log(params)
    //   });
    // }
    changeTitle(title) {
        this.screenTitle = title;
        console.log(this.router.url);
    }
};
TechComponent = tslib_1.__decorate([
    Component({
        selector: "app-tech",
        templateUrl: "./tech.component.html",
        styleUrls: ["./tech.component.scss"]
    })
], TechComponent);
export { TechComponent };
//# sourceMappingURL=tech.component.js.map