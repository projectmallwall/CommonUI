import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { SectionComponent } from '@section/section/section.component';
import { CoreService } from '../services/core.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  currentUrl = '';
  pageDoesNotExist = false;
  sectionsList = [];
  fields = [];

  constructor(private router: Router, private coreService: CoreService) { }

  ngOnInit() {
    this.currentUrl = this.router.url;
    forkJoin([this.coreService.fetchPageSectionConfiguration(this.router.url),
      this.coreService.fetchPageFieldsConfiguration(this.router.url)]).subscribe((data) => {
      this.sectionsList = data[0] && data[0].layout;
      this.fields = data[1];
      console.log('SectionsList'+this.sectionsList);
    }, (err) => {
      this.pageDoesNotExist = true;
    }, () => console.log('Completed'));
  }

}
