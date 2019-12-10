import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { SystemyComponent } from "./components/systemy/systemy.component";
import navigation from "src/navigation";
import { SystemComponent } from "./components/system/system.component";
import { GestorzyComponent } from "./components/gestorzy/gestorzy.component";
import { ObiektyComponent } from "./components/obiekty/obiekty.component";
import { CechyComponent } from "./components/cechy/cechy.component";

const routes: Routes = [
  { path: "", pathMatch: "full", component: HomeComponent },
  {
    path: navigation.systemy,
    children: [
      { path: "", pathMatch: "full", component: SystemyComponent },
      { path: ":id", component: SystemComponent }
    ]
  },
  {
    path: navigation.gestorzy,
    children: [
      { path: "", pathMatch: "full", component: GestorzyComponent },
      { path: ":id", component: GestorzyComponent }
    ]
  },
  {
    path: navigation.obiekty,
    children: [
      { path: "", pathMatch: "full", component: ObiektyComponent },
      { path: ":id", component: ObiektyComponent }
    ]
  },
  {
    path: navigation.cechy,
    children: [
      {
        path: "",
        component: CechyComponent
      },
      {
        path: ":id",
        component: CechyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
