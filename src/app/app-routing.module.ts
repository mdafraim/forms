import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderFormComponent } from './order-form/order-form.component';
import { SeeOrdersComponent } from './see-orders/see-orders.component';

const routes: Routes = [
  { path: 'orderForm', component: OrderFormComponent },
  { path: 'seeOrders', component: SeeOrdersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
