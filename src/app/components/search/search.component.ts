import { SpotifyService } from './../../services/spotify.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {

  artistas: any[] = [];
  loading: boolean;
  constructor(private spotify: SpotifyService) {
   }

  buscar(termino: string) {
    if (termino.length > 0) {
      this.loading = true;
      this.spotify.getArtista(termino)
          .subscribe((data: any) => {
            this.artistas = data;
            this.loading = false;
          });
      }
    }


}
