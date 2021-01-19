import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core'
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';
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
    await Storage.set({
      key: storageKey,
      value: encryotedValue
    });
  }

  async readFromStorage(storageKey: string) {
    const returnValue = await Storage.get({ key: storageKey });
    //in case of value exists then decript value from the storage
    if (returnValue.value) {
      return JSON.parse(unescape(atob(returnValue.value)));
    }
    else {
      return false;
    }
  }

  async deleteValueFromStorage(storageKey: string)
  {
    await Storage.remove({key : storageKey});
  }

  async clearStorage()
  {
    await Storage.clear();
  }

   saveToken(value: any) {
    this.token = value;
    
  };


   getToken() : string | null { 
    return this.token;
  };


}

