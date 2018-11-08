import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LazyComponent } from './lazy.component';

const ROUTES = [
  { path: '', component: LazyComponent }
];

@NgModule({
  declarations: [
    LazyComponent
  ],
  imports: [
    RouterModule.forChild(ROUTES)
  ]
})
export class LazyModule { }

