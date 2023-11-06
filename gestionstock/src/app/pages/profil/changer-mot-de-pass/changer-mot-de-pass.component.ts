import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changer-mot-de-pass',
  templateUrl: './changer-mot-de-pass.component.html',
  styleUrls: ['./changer-mot-de-pass.component.css']
})
export class ChangerMotDePassComponent implements OnInit {

  constructor(
    private router: Router

  ) { }

  ngOnInit(): void {
  }
  cancelClick(): void {
    this.router.navigate(['profil']);
  }
}
