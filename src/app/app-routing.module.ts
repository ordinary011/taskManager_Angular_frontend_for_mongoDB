import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoComponent } from './components/info/info.component';

const routes: Routes = [
  { path: '', component: InfoComponent },
  { path: 'start', loadChildren: './modules/start/start.module#StartModule' },
  { path: 'home', loadChildren: './modules/home/home.module#HomeModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
