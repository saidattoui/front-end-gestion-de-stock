import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page-gategorie',
  templateUrl: './page-gategorie.component.html',
  styleUrls: ['./page-gategorie.component.css']
})
export class PageGategorieComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  nouvelleCategorie(): void {
    this.router.navigate(['nouvelGategorie'])
  }

}
