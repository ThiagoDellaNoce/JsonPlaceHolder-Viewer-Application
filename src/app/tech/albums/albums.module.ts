import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AlbumsRoutingModule } from "./albums.routing.module";

import { AngularMaterialModule } from "src/app/angular-material/angular-material.module";

import { AlbumsComponent } from "./albums.component";
import { PhotosComponent } from "./photos/photos.component";

@NgModule({
  declarations: [PhotosComponent, AlbumsComponent],
  imports: [CommonModule, AngularMaterialModule, AlbumsRoutingModule]
})
export class AlbumsModule {};
