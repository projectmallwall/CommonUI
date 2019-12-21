import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { SectionComponent } from '../../section/section/section.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  currentUrl = '';
  pageDoesNotExist = false;
  sectionsList = [];

  constructor(private router: Router, private commonService: CommonService, private httpClient: HttpClient) { }

  ngOnInit() {
    this.fetchPageStructuralData().subscribe((data) => {
      this.sectionsList = data && data.layout;
      console.log('SectionsList'+this.sectionsList);
    }, (err) => {
      this.pageDoesNotExist = true;
    }, () => console.log('Completed'));
  }

  fetchPageStructuralData(): Observable<any> {
    this.currentUrl = this.router.url;
    let urlParts = this.commonService.splitUrl(this.currentUrl);
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
