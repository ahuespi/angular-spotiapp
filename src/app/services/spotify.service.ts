import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  data:any = {}
  constructor(
    private http:HttpClient
  ) { 
  }

  getQuery( query: string ){
    const url=`https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBQGRdh5wnIQK3zRSfdfnmd0nm0Pc3DcbSc6A9iIAW5QNxYW6sZ_62hoFn0zw4GPdDPJGK2xGNF-iEUVpQ'
    });

    return this.http.get(url,{headers})
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases').pipe( map( data => data['albums'].items ))
  }

  // Functions to Artists

  getArtists(artists:string){

    return this.getQuery(`search?q=${artists}&type=artist&limit=15`).pipe(map( data => data['artists'].items ))
  }
  getArtist(artist:string){

    return this.getQuery(`artists/${artist}`)
  }
  
  getTopTrack(id:string){

    return this.getQuery(`artists/${id}/top-tracks?country=ar`).pipe(map( data => data['tracks'] ))
  }
}