import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CreatepostComponent } from './createpost/createpost.component';
import { ListCatsComponent } from './list-cats/list-cats.component';
import { EditCatComponent } from './edit-cat/edit-cat.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { CatService } from './services/cat.service';
import { CatsRoutingModule } from './cats-routing.module';
import { AuthGuardService } from '../services/auth-guard.service';
import { TokenInterceptorService } from '../core/services/token-interceptor.service';

@NgModule({
  declarations: [CreatepostComponent, ListCatsComponent, EditCatComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    CatsRoutingModule,
  ],
  providers: [
    CatService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  exports: [CreatepostComponent, ListCatsComponent, EditCatComponent],
})
export class CatsModule {
  constructor() {
    // console.log('CatsModule');
  }
}
