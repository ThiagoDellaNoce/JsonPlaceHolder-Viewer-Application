import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AlbumsComponent } from './albums.component';
import { PhotosComponent } from './photos/photos.component';

const albumsRoutes = [
    { path: '', component: AlbumsComponent },
    { path: ':id', component: PhotosComponent,
        children:[
            { path: '', component: PhotosComponent },
            { path: 'fotos', component: PhotosComponent }
        ] 
    }
];

@NgModule({
    imports: [RouterModule.forChild(albumsRoutes)],
    exports: [RouterModule]
})
export class AlbumsRoutingModule {}