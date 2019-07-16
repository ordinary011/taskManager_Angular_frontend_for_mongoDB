import { Component, OnInit } from '@angular/core';

import { TransferService } from 'src/app/services/transfer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean;

  constructor(
    private transfer:TransferService,
  ) { }

  ngOnInit() {
    this.transfer.telecast.subscribe((msg: string) => {
      if (localStorage.getItem('token')) this.isLogged = true;
    });
  }

  logOut() {
    localStorage.removeItem('token');
    this.isLogged = false
  }

}
