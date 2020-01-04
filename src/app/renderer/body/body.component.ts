import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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

  constructor(private router: Router, private coreService: CoreService) { }

  ngOnInit() {
    this.currentUrl = this.router.url;
    this.coreService.fetchPageSectionConfiguration(this.router.url).subscribe((data) => {
      this.sectionsList = data && data.layout;
      console.log('SectionsList'+this.sectionsList);
    }, (err) => {
      this.pageDoesNotExist = true;
    }, () => console.log('Completed'));
  }

}
