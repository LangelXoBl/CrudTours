import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { CreateComponent } from './vistas/create/create.component';
import { EditComponent } from './vistas/edit/edit.component';
import { ReservationsComponent } from './vistas/reservations/reservations.component';

const routes: Routes = [
  {path:'', redirectTo:'dashboard', pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent},
  {path:'create', component:CreateComponent},
  {path:'edit/:idTour', component:EditComponent},
  {path:'reservations/bytour/:idTour', component:ReservationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponent = [DashboardComponent, CreateComponent, EditComponent, ReservationsComponent]
