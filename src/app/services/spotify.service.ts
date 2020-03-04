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

  getQuery( query: string){
    const url=`https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCsYPQRwMnDqQrkyfxlVjVgupPoiJorgZFVGa5eQOInL4hP7PxKrhhkJsHr2KP2shqIRUPltueAsBhSPYg'
    });

    return this.http.get(url,{headers})
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases').pipe( map( data => data['albums'].items ))
  }

  getArtists(artist:string){

    return this.getQuery(`search?q=${artist}&type=artist&limit=15`).pipe(map( data => data['artists'].items ))
  }
}