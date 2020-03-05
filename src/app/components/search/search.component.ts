import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  searchContent:any = [];
  loading: boolean;
  constructor(
    private spotify:SpotifyService
  ) { }

  buscar(value) {
    this.loading = true;
    this.spotify.getArtists(value).subscribe((res:any) =>{
      this.searchContent = res;
      this.loading = false;
    });
  }

}
