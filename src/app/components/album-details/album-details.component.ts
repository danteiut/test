import { Component, Input, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/services/album.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from 'src/app/models/album.model';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentAlbum: Album = {
    title: '',
    description: '',
    published: false
  };
  
  message = '';

  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getAlbum(this.route.snapshot.params["id"]);
    }
  }

  getAlbum(id: string): void {
    console.log(id);
    
    this.albumService.get(id)
      .subscribe({
        next: (data) => {
          this.currentAlbum = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
