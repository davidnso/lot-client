import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StoreComponent } from "./dashboards/store/store.component";
import { BuilderComponent } from './dashboards/store/components/builder/builder.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: StoreComponent
  },
  {
    path: 'create-listing',
    component: BuilderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LOTRoutingModule {}
