import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

const appRoutes: Routes = [{ path: "", loadChildren: () => import('./tech/tech.module').then(m => m.TechModule) }];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {};
