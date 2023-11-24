import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AkosComponent } from './akos/akos.component';
import { MartinComponent } from './martin/martin.component';
import { VajkComponent } from './vajk/vajk.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'akos-component', component: AkosComponent },
  { path: 'martin-component', component: MartinComponent },
  { path: 'vajk-component', component: VajkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

