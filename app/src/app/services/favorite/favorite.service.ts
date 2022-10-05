import { Injectable } from '@angular/core';

const LOCALSTORAGE_NAME = 'favorite';



@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  
  infoArray: Array<{id: string, title: string}>
  constructor() { }

  setInfo(id: string, title: string): {id: string, title: string} {
    let info = {
      id: id,
      title: title
    };
    return info;
  }

  contains(obj: {id: string, title: string}, list: Array<{id: string, title: string}> ){
    for (let i = 0; i < list.length; i++){
      if (list[i] === obj) {
        return true;
      }
    }
    return false;
  }

  removeEl(obj: {id: string, title: string}, list: Array<{id: string, title: string}>){
    for (let i = 0; i < list.length; i++){
      if (list[i] === obj) {
        list.slice(i, 1);
      }
    }

    return list;
  }

  add(id: string, title: string){
    let info = this.setInfo(id, title);
    
    if (this.contains(info, this.infoArray)) {
      return;
    }

    this.infoArray.push(info);

    try {
      localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify(this.infoArray));
    } catch(e) {
      console.error('Error saving to localStorage', e);
    }
  }

  remove(id: string, title: string){
    let info = this.setInfo(id, title);
    
    if(this.contains(info, this.infoArray)){
      this.infoArray = this.removeEl(info, this.infoArray);
      try {
        localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify(this.infoArray));
      } catch(e) {
        console.error('Error saving to localStorage', e);
      }
    }
  }

  get(){
    let list = localStorage.getItem(LOCALSTORAGE_NAME);

    return list !== null ? JSON.parse(list) : Array<{id: string, title: string}>;
  }
}
