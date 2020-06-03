import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layouts/layout/layout.component';
// const routes: Routes = [];

const routes: Routes = [
  {
    path: 'sitio',
    component: LayoutComponent,
    children: [
      // {
      //   path: 'start',
      //   loadChildren: () => import('./pages/start/start.module').then(m => m.StartModule),
      //   component: StartComponent
      // },
      // {
      //   path: '**',
      //   pathMatch: 'full',
      //   redirectTo: 'start'
      // }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'sitio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
