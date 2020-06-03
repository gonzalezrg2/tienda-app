import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// IMPORTACIONES DE ANGULAR MATERIAL
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';

const routes: Routes = [
  {
    path: 'inicio',
    data: {
      title: 'inicio'
    },
    component: LayoutComponent
  }
];

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    RouterModule.forChild(routes),
  ],
  exports: []
})
export class LayoutModule { }
