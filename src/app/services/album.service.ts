import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models/album.model';
import { Subject, throwError }  from 'rxjs';

const baseUrl = 'https://api.imgur.com/3';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }
  public newAlbumSubject = new Subject<any>();

  getAll(): Observable<Album[]> {
    return this.http.get<any[]>(`${baseUrl}/gallery/hot/viral/0.json`);
  }

  get(id: any): Observable<Album> {
    return this.http.get<any>(`${baseUrl}/album/${id}`);
  }

  findByTitle(title: any): Observable<Album[]> {
    return this.http.get<any[]>(`${baseUrl}/album/${title}`);
  }
}
