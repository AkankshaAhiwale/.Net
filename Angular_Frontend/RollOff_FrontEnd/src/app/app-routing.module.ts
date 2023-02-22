import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RollOffDetailsComponent } from './roll-off-details/roll-off-details.component';
import { RollOffFormComponent } from './RollOffDetails/roll-off-form/roll-off-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'roll-off-details',
    component: RollOffDetailsComponent
  },
  {
    path: 'roll-off-form',
    component: RollOffFormComponent
  },
  {
    path: 'signUo',
    component:SignUpComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
