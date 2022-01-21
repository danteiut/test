import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album.model';
import { Imagen } from 'src/app/models/imagen.model';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  albums?: Album[];
  currentAlbum: Album = {};
  albumSearched: Album = {};
  currentIndex? = -1;
  title = '';
  searchDone = false;

  imgs: Imagen[] = [];

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.retrieveAlbums();
    console.log(this.albums);
  }

  retrieveAlbums(): void {
    this.albumService.getAll().subscribe((result:any) => this.albums = result.data );
  }

  refreshList(): void {
    this.retrieveAlbums();
    this.currentAlbum = {};
    this.currentIndex = -1;
  }

  setActiveAlbum(album: Album, index?: number): void {
    this.currentAlbum = album;
    this.currentIndex = index;
  }

  seatchAlbumId(): void{
    this.currentAlbum = {};
    this.currentIndex = -1;
    this.albumService.get(this.title).subscribe((result:any) => {this.albumSearched = result.data, this.imgs = [result.data.images[0], result.data.images[1],result.data.images[2], result.data.images[3]], console.log(this.imgs);
     this.searchDone = true} 
    , err => {console.log(err), this.searchDone = false;
    });
    
  }

  searchTitle(): void {
    this.currentAlbum = {};
    this.currentIndex = -1;
    console.log(this.title);
    this.albumService.findByTitle(this.title)
      .subscribe({
        next: (data:any) => {
          this.albums =  data;
          console.log(this.albums);
        },
        error: (e) => console.error(e)
      });
  }


}
