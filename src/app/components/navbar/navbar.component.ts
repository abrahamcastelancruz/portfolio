import { Component, OnInit } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  faGit,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  /* Asignation of Icons*/
  faBars = faBars;
  faTimes = faTimes;
  faGit = faGit;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;

  /* Hamburger Menu Variable*/
  showMenu = false;
  constructor() {}

  ngOnInit(): void {}

  hamburgerMenu() {
    this.showMenu = !this.showMenu;
  }
}
