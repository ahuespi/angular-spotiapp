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
      'Authorization': 'Bearer BQBtBL_mFduS40gB96tl80gahmtnboPXLRb84IUpApO1Sp_zlqtpgwNFBFp5eFd2kWtjqJ3kY5chXVRL05Q'
    });

    return this.http.get(url,{headers})
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases').pipe( map( data => data['albums'].items ))
  }

  getArtists(artists:string){

    return this.getQuery(`search?q=${artists}&type=artist&limit=15`).pipe(map( data => data['artists'].items ))
  }
  getArtist(artist:string){

    return this.getQuery(`artists/${artist}`)
  }
}