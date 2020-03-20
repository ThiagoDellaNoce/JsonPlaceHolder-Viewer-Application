import { Component, OnInit } from '@angular/core';

import { Album } from 'src/app/models/album';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  data: any;

  album: Album;
  albums: Album[];

  constructor( private albumService: AlbumService) { }

  ngOnInit() {
    this.albumService.getAlbums().subscribe(
      res => {
        this.data = res;

        this.albums = this.data;
      },
      err => { }
    );
  }

}