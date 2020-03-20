import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { AngularMaterialModule } from "../angular-material/angular-material.module";

import { TechRoutingModule } from "./tech.routing.module";

import { TechComponent } from "./tech.component";
import { HomeComponent } from "./home/home.component";
import { PostsComponent } from "./posts/posts.component";
import { DialogPost } from "./posts/detalhes/dialog-post";
import { TodosComponent } from "./todos/todos.component";

@NgModule({
  declarations: [
    TechComponent,

    HomeComponent,
    PostsComponent,
    DialogPost,
    TodosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    AngularMaterialModule,
    TechRoutingModule
  ],
  entryComponents: [DialogPost]
})
export class TechModule {};
