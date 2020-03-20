import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Photo } from "src/app/models/photo";
import { AlbumService } from "src/app/services/album.service";

@Component({
  selector: "app-photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.scss"]
})
export class PhotosComponent implements OnInit {
  data: any;

  albumId: number;
  photo: Photo;
  photos: Photo[];

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumService
  ) {};

  ngOnInit() {
    this.route.params.subscribe(params => {
      const param = params["id"];

      if (param.match(/\d+/)) {
        this.albumId = +params["id"];

        this.albumsService.getPhotos(this.albumId).subscribe(
          res => {
            this.data = res;

            this.photos = this.data;
          },
          err => {}
        );
      };
    });
  };
};
