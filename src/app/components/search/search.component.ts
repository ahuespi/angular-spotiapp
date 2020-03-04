import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  searchContent:any = [];
  constructor(
    private spotify:SpotifyService
  ) { }

  buscar(value) {
    this.spotify.getArtists(value).subscribe((res:any) =>{
      this.searchContent = res;
    });
  }

}
