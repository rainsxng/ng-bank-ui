import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './containers/layout/layout.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: DashboardComponent },
      { path: 'card/:id', component: CardDetailsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
