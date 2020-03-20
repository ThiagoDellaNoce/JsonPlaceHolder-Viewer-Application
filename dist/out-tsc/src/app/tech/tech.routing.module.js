import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TechComponent } from './tech.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { TodosComponent } from './todos/todos.component';
import { AlbumsModule } from './albums/albums.module';
const eventosRoutes = [
    { path: '', component: TechComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'posts', component: PostsComponent },
            { path: 'albuns', loadChildren: () => AlbumsModule },
            { path: 'todos', component: TodosComponent },
            { path: '**', component: HomeComponent }
        ] }
];
let TechRoutingModule = class TechRoutingModule {
};
TechRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(eventosRoutes)],
        exports: [RouterModule]
    })
], TechRoutingModule);
export { TechRoutingModule };
//# sourceMappingURL=tech.routing.module.js.map