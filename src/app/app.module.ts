import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { TopBarComponent } from "./components/top-bar/top-bar.component";
import { MenuComponent } from "./components/menu/menu.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { SystemyComponent } from "./components/systemy/systemy.component";
import { SystemComponent } from "./components/system/system.component";
import { GestorzyComponent } from "./components/gestorzy/gestorzy.component";
import { PaginationComponent } from "./components/pagination/pagination.component";
import { ObiektyComponent } from "./components/obiekty/obiekty.component";
import { CechyComponent } from "./components/cechy/cechy.component";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    // TopBarComponent,
    // MenuComponent,
    // FooterComponent,
    HomeComponent,
    // SystemyComponent,
    // SystemComponent,
    // GestorzyComponent,
    // PaginationComponent,
    // ObiektyComponent,
    // CechyComponent,
    // SpinnerComponent
  ],
  imports: [
    BrowserModule,
    // HomeRoutingModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
