import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { TechComponent } from "./tech.component";

import { HomeComponent } from "./home/home.component";
import { PostsComponent } from "./posts/posts.component";
import { AlbumsModule } from "./albums/albums.module";
import { TodosComponent } from "./todos/todos.component";

const eventosRoutes = [
  {
    path: "",
    component: TechComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "posts", component: PostsComponent },
      { path: "albuns", loadChildren: () => AlbumsModule },
      { path: "todos", component: TodosComponent },
      { path: "**", component: HomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(eventosRoutes)],
  exports: [RouterModule]
})
export class TechRoutingModule {};
