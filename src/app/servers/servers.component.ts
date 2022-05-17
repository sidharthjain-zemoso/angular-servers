import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template: `<app-server></app-server> <app-server></app-server> `,
  styleUrls: ['./servers.component.css'],
  styles: [
    `
      .white-text {
        color: white;
      }
    `,
  ],
})
export class ServersComponent implements OnInit {
  allowNewUser = false;
  serverCreationStatus = 'No Server was created!';
  serverName = 'New Server';
  userName = '';
  isServerCreated = false;
  toggler = true;
  serverNames = ['Server1', 'Server2', 'Server3'];
  clicks: Date[] = [];
  // counter = 0;

  constructor() {
    setTimeout(() => {
      this.allowNewUser = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverNames.push(this.serverName);
    this.isServerCreated = true;
    this.serverCreationStatus = 'Server is created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(this.serverName);
  }

  onResetUserName() {
    this.userName = '';
  }

  toggle() {
    // this.clicks.push(++this.counter);
    this.clicks.push(new Date());
    this.toggler = !this.toggler;
  }
}
