import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { CommonService } from 'src/app/common.service';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private commonService: CommonService, private httpClient: HttpClient) { }

  fetchPageStructuralData(url): Observable<any> {
    let urlParts = this.commonService.splitUrl(url);
    let jsonFileName = '';
    urlParts.forEach(function(urlString){
      jsonFileName += urlString + '.';
    });
    if (jsonFileName !== "") {
      jsonFileName += 'section.json';
      return this.httpClient.get('./assets/pageLayout/'+jsonFileName);
    } else {
      return throwError('Structural configuration for this page does not exist.');
    }
    console.log('JSON file name:'+jsonFileName);
  }
}
