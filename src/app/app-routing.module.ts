import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateVcentreComponent } from './vCentre/create-vcentre/create-vcentre.component';
import { ListVcentreComponent } from './vCentre/list-vcentre/list-vcentre.component';
import { UpdateVcentreComponent } from './vCentre/update-vcentre/update-vcentre.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-vcentre',
    pathMatch: 'full'
  },
 { path: 'list-vcentre' , component: ListVcentreComponent },
 { path: 'create-vcentre' , component: CreateVcentreComponent },
 { path: 'update-vcentre' , component: UpdateVcentreComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
