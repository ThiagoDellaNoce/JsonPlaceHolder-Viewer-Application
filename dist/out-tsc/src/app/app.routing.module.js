import * as tslib_1 from "tslib";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { TechModule } from './tech/tech.module';
const appRoutes = [
    { path: '', loadChildren: () => TechModule }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app.routing.module.js.map