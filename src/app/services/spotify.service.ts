import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  data:any = {}
  constructor(
    private http:HttpClient
  ) { 
  }

  getNewReleases(){

    const data = {}
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCf9B-vd_bjbTqcS--IEA6XQFzCMYfj7Gs-w_6QD7SaLRTi80GAxIZOUQJRsm7vQDcczLVu5E5tQvEYFB8'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers});
  }
}
