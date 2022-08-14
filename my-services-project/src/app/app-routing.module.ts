import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyServicesPageComponent } from './my-services-page/my-services-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'services', pathMatch: 'full' },
  { path: 'services', component: MyServicesPageComponent, data: { title: 'سرویس های من' } },
  { path: 'error/404', component: NotFoundPageComponent, data: { title: 'یافت نشد' } },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
