import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {

  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCVAP9q5qTi0kT4z6P01s7z3xC3exyNsOBafEpj9ntWLJDiMWV9UFFXJBeZIlun6bHp1taw0Ukoy7x_TKg-szC09ZbqKcXG7bRsotbQebgTM62_g8Qb1NffBWNX20AurBozy5aeCoG1QQ'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers } );
  }

  getArtista(termino: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCVAP9q5qTi0kT4z6P01s7z3xC3exyNsOBafEpj9ntWLJDiMWV9UFFXJBeZIlun6bHp1taw0Ukoy7x_TKg-szC09ZbqKcXG7bRsotbQebgTM62_g8Qb1NffBWNX20AurBozy5aeCoG1QQ'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist`, { headers } );
  }

}
