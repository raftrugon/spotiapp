import { SpotifyService } from './../../services/spotify.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

newSongs: any[] = [];
loading: boolean;
error: boolean;
msgError: string;
  constructor(private spotify: SpotifyService) {
    this.error = false;
    this.loading = true;

    this.spotify.getNewReleases()
          .subscribe((data: any) => {
            this.newSongs = data;
            this.loading = false;
          }, (errorServicio) => {

            this.loading = false;
            this.error = true;
            this.msgError = errorServicio.error.error.message;
          });
  }


}
