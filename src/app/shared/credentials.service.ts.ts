import { Injectable } from '@angular/core';
import { isObject, isString } from 'util';

export interface ICreds {
  app_id: string;
  app_key: string;
}

@Injectable()
export class CredentialsService {
  private readonly localStorageKey: string = 'app_creds';

  set credentials(creds: ICreds) {
    if (this.isValid(creds)) {
      localStorage.setItem(this.localStorageKey, JSON.stringify(creds));
    }
  }

  get credentials(): ICreds {
    const data = JSON.parse(localStorage.getItem(this.localStorageKey));
    return this.isValid(data) ? data : {app_id: null, app_key: null};
  }

  get isValidCredentials(): boolean {
    return this.isValid(this.credentials);
  }

  clear(){
    localStorage.removeItem(this.localStorageKey);
  }

  private isValid(data: ICreds) {
    return !!data && isObject(data) && data.hasOwnProperty('app_id') && isString(data.app_id) && data.hasOwnProperty('app_key') && isString(data.app_key) && data.app_key.length > 3 && data.app_id.length > 3;
  }

}
