import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AttractComponent } from './attract/attract.component';
import { SetImageDirective } from './directives/set-image.directive';
import { FavIconDirective } from './directives/fav-icon.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { SortCatComponent } from './sort-cat/sort-cat.component';
import { FavService } from './services/fav.service';
import { MyfavoriteComponent } from './myfavorite/myfavorite.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AttractComponent,
    SetImageDirective,
    FavIconDirective,
    FilterPipe,
    SortCatComponent,
    MyfavoriteComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
