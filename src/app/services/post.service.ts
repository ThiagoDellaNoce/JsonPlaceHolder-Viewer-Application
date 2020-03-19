import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiURL: string = "https://jsonplaceholder.typicode.com/";

  constructor(private http:HttpClient) { 
  }

  getPosts()  {
    return this.http.get(this.apiURL +'posts/');
  }
  
  getComments(postId) {
    return this.http.get(this.apiURL +'comments?postId=' + postId);
  }

}