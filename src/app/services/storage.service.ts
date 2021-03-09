import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core'
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  token: string;

  constructor() { }

  async saveStorage(storageKey: string, value: any) {
    //encript value before save it in local storage
    const encryotedValue = btoa(escape(JSON.stringify(value)));
    await localStorage.setItem(
      storageKey,
      encryotedValue
    );
  }

  async readFromStorage(storageKey: string) {
    var value = await localStorage.getItem(storageKey);
    return JSON.parse(unescape(atob(value)));
  }

  async deleteValueFromStorage(storageKey: string)
  {
    await localStorage.removeItem(storageKey);
  }

  async clearStorage()
  {
    await localStorage.clear();
  }

   saveToken(value: any) {
    this.token = value;
    
  };


   getToken() : string | null { 
    return this.token;
  };


}