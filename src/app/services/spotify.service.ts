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
      'Authorization': 'Bearer BQB90ewCMuX_ruxVsBBF8gPkaj3WW6jtqmRMvZd2UhWJ4fjBsBNcwfCI4TXwXV3GZyzhP9Wr8fr20yRk8QWnPiVcHKMkzZBjg64t5tTMolPCJSYu_wSYioztSB7B7QUw0mwj77liT4WWjw'
    });
    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers } )
            .subscribe((data: any) => {
              console.log(data);
            });
  }
}
