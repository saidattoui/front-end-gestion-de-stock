import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvelle-gategorie',
  templateUrl: './nouvelle-gategorie.component.html',
  styleUrls: ['./nouvelle-gategorie.component.css']
})
export class NouvelleGategorieComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  cancelClick(): void {
    this.router.navigate(['Gategorie']);
  }
}
