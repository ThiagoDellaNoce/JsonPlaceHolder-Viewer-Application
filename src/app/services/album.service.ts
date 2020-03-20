import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  apiURL: string = "https://jsonplaceholder.typicode.com/";

  constructor(private http:HttpClient) { 

  }

  getAlbums()  {
    return this.http.get(this.apiURL + 'albums');
  }
  
  getPhotos(albumId: number) {
    return this.http.get(this.apiURL + 'photos?albumId=' + albumId);
  }
  
}