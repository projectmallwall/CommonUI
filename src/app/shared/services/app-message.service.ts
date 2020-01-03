import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppMessageService {

  messages: any[] = [];

  showMessage (header: string, body: string) {
    this.messages.push({ header, body});
  }

  removeMessage (message) {
    this.messages = this.messages.filter( msg => msg.body != message.body);
  }
}
