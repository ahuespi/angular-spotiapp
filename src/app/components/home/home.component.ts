import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {

  newSongs:any = []
  loading:boolean;
  constructor(private spotify:SpotifyService) { 
    this.loading = true;
    this.spotify.getNewReleases().subscribe((res:any) => {
      this.newSongs = res;
      this.loading = false;
    })
  }

  ngOnInit() {
  }

}
