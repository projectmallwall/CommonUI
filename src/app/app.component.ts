import { Component } from '@angular/core';
import { FormsService } from './section/services/forms.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FormsService]
})
export class AppComponent {
  title = 'CommonUI';
}
