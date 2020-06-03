import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  modo = 'side';
  menuEsAbierto = true;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe(['(min-width: 769px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.modo = 'side';
          this.menuEsAbierto = true;
        } else {
          this.modo = 'over';
          this.menuEsAbierto = false;
        }
      });
  }

  ngOnInit(): void {
  }

}
