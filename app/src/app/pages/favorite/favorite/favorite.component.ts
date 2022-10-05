import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FavoriteService } from 'src/app/services/favorite/favorite.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.less']
})
export class FavoriteComponent  implements OnInit {

  listOfFav: Array<{id: string, title: string}> = [];
  constructor(private favoriteService: FavoriteService,
              private sanitizer : DomSanitizer) { 
              }

  ngOnInit(): void {
    this.loadFavVideos();
  }


  loadFavVideos(){
    this.listOfFav = this.favoriteService.get();
  }

  getSafeUrl(value: string){
    return this.sanitizer?.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${value}`);
  }

  removeFromFavorite(id: string, title: string){
    localStorage.clear();
    this.favoriteService.remove(id, title);
    this.loadFavVideos();
  }
}
