import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'src/app/core/pages/not-found/not-found.component';
import { ShopsComponent } from './pages/shops/shops.component';

const routes: Routes = [
  { path: ':name', component: ShopsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopsRoutingModule { }
