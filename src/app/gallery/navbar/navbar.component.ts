import { Component, OnInit } from "@angular/core";
import { CredentialsService } from "../../shared/credentials.service.ts";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  showNavbar:boolean;
  constructor(private credsManager: CredentialsService, private router: Router) {
  }

  logout() {
    this.credsManager.clear();
    this.router.navigate(['/login']);
  }

  toggleNavBar(){
    this.showNavbar = !this.showNavbar;
  }

  ngOnInit() {
  }

}
