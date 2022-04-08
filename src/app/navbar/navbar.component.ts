import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AuthService } from '../auth.service';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogin: boolean = false;
  userName: string;
  constructor(private _AuthService: AuthService) {

    _AuthService.currentUser.subscribe((data) => {
      this.userName = JSON.parse(localStorage.getItem('userName'));

      if (data != null) {

        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    })


  }

  logout() {
    this._AuthService.logout();
  }
  ngOnInit(): void {

  }

}
