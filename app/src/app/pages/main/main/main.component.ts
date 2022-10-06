import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { takeUntil, tap } from 'rxjs';
import { RxUnsubscribe } from 'src/app/rx-unsubscribe';
import { DataService } from 'src/app/services/data/data.service';
import { FavoriteService } from 'src/app/services/favorite/favorite.service';
import { IData } from 'src/models/data.inteface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent extends RxUnsubscribe implements OnInit {
  
  list: Array<{id: string, title: string, iconName: string}> = [];
  urlSafe: any;
  icon: string = "bookmark_border";
  inS: string = '';
  
  constructor(private dataService: DataService,
              private sanitizer : DomSanitizer,
              private favoriteService: FavoriteService,
              private spinner: NgxSpinnerService ) {
                super();
   }

  ngOnInit(): void {
    this.spinner.show()
    setTimeout(()=> {
      this.spinner.hide()
    },10000)
    this.uploadingVideos();
  }

  uploadingVideos(): void{
    this.dataService.getListOfViodeo().pipe(
      takeUntil(this.destroy$),
      tap((value) => {
        this.list = this.fullListOfTitle(value);
      })
    )
    .subscribe();
  }

  fullListOfTitle(list: IData): any{
    let arr: any = [];
    for(let i = 0; i < list.items.length; i++){
      let video = {
        id: list.items[i].id,
        title: list.items[i].snippet.title,
        iconName: "bookmark_border"
      }
      arr.push(video);
    }
    return arr;
  }

  getSafeUrl(value: string){
    
    return this.sanitizer?.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${value}`);
  }

  addToFavorite(id: string, title: string, idIcon: number){
    if (this.list[idIcon].iconName === "bookmark_border"){
      this.list[idIcon].iconName = "bookmark";
      this.favoriteService.add(id, title);
    } else {
      this.list[idIcon].iconName = "bookmark_border";
      this.favoriteService.remove(id, title);
    }
  }

  loadMore(){
    this.dataService.getListOfViodeo().pipe(
      takeUntil(this.destroy$),
      tap(value => {
        let arr = this.fullListOfTitle(value);
        this.list = this.list.concat(arr);
        console.log(this.list);
      }) 
    )
    .subscribe();
  }
}
