import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  /**
   * @param fullUrl
   * URL should be in the format '/path/subPath/subSubPath'
   * No validations of url format done here
   */
  splitUrl(fullUrl: String): Array<String> {
    let urlArray = fullUrl.split('/');
    if (urlArray && urlArray.length && urlArray[0] === "") {
      urlArray.shift();
    }
    return urlArray;
  }
}
