import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ChildComponent } from './child/child.component';
import { OneComponent } from './child/one/one.component';
import { TwoComponent } from './child/two/two.component';
import { ThreeComponent } from './child/three/three.component';

const routes: Routes = [
  { path: '',      component: DashboardComponent },
  { path: 'child', component: ChildComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RouterComponents = [
  DashboardComponent,
  ChildComponent,
  OneComponent,
  TwoComponent,
  ThreeComponent
]
