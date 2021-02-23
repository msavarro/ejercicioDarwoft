import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorPageComponent } from './pages/calculator-page/calculator-page.component';
import { HomeComponent } from './pages/home/home.component';
import { CanActivateViaAuthGuard } from './guards/canActivateViaAuthGuard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ages', component: CalculatorPageComponent, canActivate: [CanActivateViaAuthGuard]},
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
