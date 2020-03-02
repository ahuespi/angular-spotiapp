import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {

  newSongs:any = []
  constructor( 
    private http: HttpClient,
    private spotify:SpotifyService
  ) { 
    this.spotify.getNewReleases().subscribe(res => {
      
      this.newSongs = res.albums.items
      console.log(this.newSongs)
    })
  }

  ngOnInit() {
  }

}
