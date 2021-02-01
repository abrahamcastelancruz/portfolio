import { Component, OnInit } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  faGit,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  faBars = faBars;
  faTimes = faTimes;
  faGit = faGit;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
  constructor() {}

  ngOnInit(): void {}
}
