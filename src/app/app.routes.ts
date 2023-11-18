import { Routes } from '@angular/router';
import { SecondPageComponent } from './second-page/second-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { autorizationGuard } from './services/autorization.guard';


export const routes: Routes = [
  { path: '', component: FirstPageComponent, pathMatch: 'full' },
  { path: 'secondPage', component: SecondPageComponent }
];
