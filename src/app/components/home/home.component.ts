import { SpotifyService } from './../../services/spotify.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

newSongs: any[] = [];

  constructor(private spotify: SpotifyService) {
    this.spotify.getNewReleases()
          .subscribe((data: any) => {
            this.newSongs = data;
          });
  }


}
