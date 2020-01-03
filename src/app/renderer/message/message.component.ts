import { Component, OnInit } from '@angular/core';
import { AppMessageService } from '../../shared/services/app-message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor(public appMessenger: AppMessageService) { }

  ngOnInit() {
  }

}
