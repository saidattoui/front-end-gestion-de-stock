import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-clt-frd',
  templateUrl: './nouveau-clt-frd.component.html',
  styleUrls: ['./nouveau-clt-frd.component.css']
})
export class NouveauCltFrdComponent implements OnInit {
  origin = '';
  constructor(
    private router: Router,

    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe( data => {
      this.origin = data['origin'];
    });
    
  }
  cancelClick(): void {
    if(this.origin === 'client') {
      this.router.navigate(['clients']);
    } else {
      this.router.navigate(['fournisseurs']);
    }
  }

}
