import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';

const routes: Routes = [
  // {path: 'component1', loadChildren: () => import('./components/component1/component1.module').then(m => m.Component1Module)},
  { path: 'component1', component: Component1Component },
  { path: 'component2', component: Component2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
