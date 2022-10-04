import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { map, take, tap } from 'rxjs';
import { DataService } from 'src/app/services/data/data.service';
import { IData } from 'src/models/data.inteface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  
  list: Array<{ id: string; title: string; }> = [];
  listOfTitle: Array<string> = [];
  listOfVideos: Array<string> = [];
  urlSafe: any;
  
  constructor(private dataService: DataService, private sanitizer : DomSanitizer ) {

   }

  ngOnInit(): void {
    this.uploadingVideos();
  }

  uploadingVideos(): void{
    this.dataService.getListOfViodeo().pipe(
      tap((value) => {
        this.fullListOfTitle(value);
      })
    )
    .subscribe();
  }

  fullListOfTitle(list: IData){
    for(let i = 0; i < list.items.length; i++){
      this.listOfTitle.push(list.items[i].snippet.title);
      this.listOfVideos.push(list.items[i].id);
      let video = {
        id: list.items[i].id,
        title: list.items[i].snippet.title
      }
      this.list.push(video);
    }
    console.log(this.list);
    this.urlSafe = this.sanitizer?.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.listOfVideos[0]}`);
  }

  getSafeUrl(value: string){
    
    return this.sanitizer?.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${value}`);
  }
}
