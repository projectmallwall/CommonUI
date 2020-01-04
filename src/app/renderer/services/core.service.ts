import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { CommonService } from '@shared/services/common.service';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private commonService: CommonService, private httpClient: HttpClient) { }

  getFieldNameFromUrl(url: string): string {
    let urlParts = this.commonService.splitUrl(url);
    let jsonFileName = '';
    urlParts.forEach(function(urlString){
      jsonFileName += urlString + '.';
    });
    return jsonFileName;
  }

  fetchPageSectionConfiguration(url): Observable<any> {
    let jsonFileName = this.getFieldNameFromUrl(url);
    if (jsonFileName !== "") {
      jsonFileName += 'section.json';
      return this.httpClient.get('./assets/pageLayout/'+jsonFileName);
    } else {
      return throwError('Structural configuration for this page does not exist.');
    }
    console.log('JSON file name:'+jsonFileName);
  }

  fetchPageFieldsConfiguration(url): Observable<any> {
    let jsonFileName = this.getFieldNameFromUrl(url);
    if (jsonFileName !== "") {
      jsonFileName += 'field.json';
      return this.httpClient.get('./assets/pageLayout/'+jsonFileName);
    } else {
      return throwError('Fields configuration for this page does not exist.');
    }
    console.log('JSON file name:'+jsonFileName);
  }

  fetchPageMetadata(url): Observable<any> {
    let jsonFileName = this.getFieldNameFromUrl(url);
    if (jsonFileName !== "") {
      jsonFileName += 'meta.json';
      return this.httpClient.get('./assets/pageLayout/'+jsonFileName);
    } else {
      return throwError('Metadata for this page does not exist.');
    }
    console.log('JSON file name:'+jsonFileName);
  }

  fetchPageFieldsData(url): Observable<any> {
    let jsonFileName = this.getFieldNameFromUrl(url);
    if (jsonFileName !== "") {
      jsonFileName += 'data.json';
      return this.httpClient.get('./assets/pageLayout/'+jsonFileName);
    } else {
      return throwError('Data for this form does not exist.');
    }
    console.log('JSON file name:'+jsonFileName);
  }
}
