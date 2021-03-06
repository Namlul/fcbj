import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { SaleComponent } from './sale/sale.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'navbar', component: NavComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'sales', component: SaleComponent },
  { path: 'accounts', component: AccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
