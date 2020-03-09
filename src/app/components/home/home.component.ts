import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { TargetBinder } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {

  newSongs:any = []
  loading:boolean;
  error:boolean = false;
  msgError:string;

  constructor(private spotify:SpotifyService) { 
    this.loading = true;
    this.error = false;
    this.spotify.getNewReleases().subscribe((res:any) => {
      this.newSongs = res;
      this.loading = false;
    },(errorServicio)=>{
      this.error = true;
      this.loading = false;
      this.msgError = errorServicio.error.error.message
    })
  }

  ngOnInit() {
  }

}
