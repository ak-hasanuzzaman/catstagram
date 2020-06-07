import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatepostComponent } from './createpost/createpost.component';
import { EditCatComponent } from './edit-cat/edit-cat.component';
import { ListCatsComponent } from './list-cats/list-cats.component';
import { AuthGuardService } from '../services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: ListCatsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: ':id/edit',
    component: EditCatComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'create',
    component: CreatepostComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatsRoutingModule {}
