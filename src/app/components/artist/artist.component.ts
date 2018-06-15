import { SpotifyService } from './../../services/spotify.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {
artista: any = {};
topTracks: any[] = [];
loadingArtist: boolean;
  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loadingArtist = true;
    this.router.params.subscribe(params => {
        this.getArtistaSearch(params['id']);
        this.getTopTracks(params['id']);
        // console.log(params['id']);
    });
  }

  getArtistaSearch(id: string) {
    this.spotify.getArtistaSearch( id )
                .subscribe( (artista: any) => {
                  this.artista = artista;
                  this.loadingArtist = false;
                });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks( id )
                .subscribe(topTracks => {
                  this.topTracks = topTracks;
                });
  }

}
