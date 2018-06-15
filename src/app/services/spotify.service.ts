import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {

  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAeFfGYy9phb27tvGcAl9lf0vxN0YygMJpCPKLlDOIAmbPL-Ig9ASHuTRVjY-l3hpk6zJfAC-c1a6F6Wb6r0J1SXkIzL2zPy_d4_ukcNebgAXAnQGFDWHRHESWyvpFGDMiPJzuv2tyiNw'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases') .pipe( map( data => {
                return data['albums'].items;
                }));
  }

  getArtista(termino: string) {
  // const headers = new HttpHeaders({
  //  'Authorization': 'Bearer BQCVAP9q5qTi0kT4z6P01s7z3xC3exyNsOBafEpj9ntWLJDiMWV9UFFXJBeZIlun6bHp1taw0Ukoy7x_TKg-szC09ZbqKcXG7bRsotbQebgTM62_g8Qb1NffBWNX20AurBozy5aeCoG1QQ'
  // });

   return this.getQuery(`search?q=${ termino }&type=artist`) .pipe( map( data => {
                return data['artists'].items;
              }));
  // return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist`, { headers } )
  //               .pipe( map( data => data['artists'].items ));
  }


  getArtistaSearch(id: string) {
     return this.getQuery(`artists/${id}`) .pipe( map( data => {
                  return data;
                }));
    }


}
