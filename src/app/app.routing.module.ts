import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { TechModule } from "./tech/tech.module";

const appRoutes: Routes = [{ path: "", loadChildren: () => TechModule }];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {};
